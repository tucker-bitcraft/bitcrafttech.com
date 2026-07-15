"""A Reverse Polish Notation (RPN) calculator.

RPN puts the operator *after* its operands, which removes the need for
parentheses and precedence rules:

    (3 + 4) * 5   ->   3 4 + 5 *

Evaluation is a single left-to-right pass over the tokens, backed by a stack:
push numbers; on an operator, pop the two most recent numbers, apply it, and
push the result back. When the input is well-formed, exactly one value remains
at the end -- the answer.

Run it:
    python rpn.py "3 4 + 5 *"      # -> 35
    python rpn.py                  # starts an interactive REPL
"""

from __future__ import annotations

import operator
import sys
from typing import Callable

# Each operator maps to a two-argument function. Order matters for `-` and `/`:
# the first popped value is the right operand.
OPERATORS: dict[str, Callable[[float, float], float]] = {
    "+": operator.add,
    "-": operator.sub,
    "*": operator.mul,
    "/": operator.truediv,
    "^": operator.pow,
}


class RPNError(ValueError):
    """Raised when an expression is malformed."""


def evaluate(expression: str) -> float:
    """Evaluate a space-separated RPN expression and return the result."""
    stack: list[float] = []

    for token in expression.split():
        if token in OPERATORS:
            if len(stack) < 2:
                raise RPNError(f"operator '{token}' needs two operands")
            right = stack.pop()
            left = stack.pop()
            if token == "/" and right == 0:
                raise RPNError("division by zero")
            stack.append(OPERATORS[token](left, right))
        else:
            try:
                stack.append(float(token))
            except ValueError:
                raise RPNError(f"invalid token: '{token}'") from None

    if len(stack) != 1:
        raise RPNError("the expression left more than one value on the stack")
    return stack[0]


def repl() -> None:
    """Read expressions from stdin until EOF (Ctrl-D) or a blank line."""
    print("RPN calculator. Enter an expression, or blank line to quit.")
    while True:
        try:
            line = input("rpn> ").strip()
        except EOFError:
            break
        if not line:
            break
        try:
            print(evaluate(line))
        except RPNError as err:
            print(f"error: {err}")


def main(argv: list[str]) -> int:
    if len(argv) > 1:
        try:
            print(evaluate(" ".join(argv[1:])))
        except RPNError as err:
            print(f"error: {err}", file=sys.stderr)
            return 1
    else:
        repl()
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
