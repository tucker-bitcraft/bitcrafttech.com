"""Tests for the RPN calculator.

Run them with:
    python -m pytest test_rpn.py       # if you have pytest
    python test_rpn.py                 # falls back to a tiny built-in runner
"""

from __future__ import annotations

from rpn import RPNError, evaluate

CASES = [
    ("3 4 +", 7),
    ("3 4 + 5 *", 35),        # (3 + 4) * 5
    ("10 2 -", 8),            # order matters: left - right
    ("2 3 ^", 8),
    ("5", 5),                 # a bare number is a valid expression
    ("1 2 3 4 + + +", 10),
    ("20 4 / 2 -", 3),        # 20 / 4 - 2
]

ERRORS = [
    "3 +",        # not enough operands
    "1 2",        # too many values left over
    "4 0 /",      # division by zero
    "3 x +",      # invalid token
]


def test_valid_expressions() -> None:
    for expression, expected in CASES:
        assert evaluate(expression) == expected, expression


def test_invalid_expressions() -> None:
    for expression in ERRORS:
        try:
            evaluate(expression)
        except RPNError:
            continue
        raise AssertionError(f"expected RPNError for: {expression!r}")


if __name__ == "__main__":
    # Minimal runner so the file works without pytest installed.
    test_valid_expressions()
    test_invalid_expressions()
    print(f"OK: {len(CASES)} evaluations and {len(ERRORS)} error cases passed.")
