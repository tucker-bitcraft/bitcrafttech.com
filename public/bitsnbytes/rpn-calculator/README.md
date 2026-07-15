# RPN Calculator

A small Reverse Polish Notation calculator, built as a teaching project for
Bitcraft Tech's [Bits & Bytes](https://bitcrafttech.com/bitsnbytes/projects/rpn-calculator).

## Files

- `rpn.py` the calculator (library + CLI + REPL)
- `test_rpn.py` tests

## Run it

```bash
# Evaluate a one-off expression
python rpn.py "3 4 + 5 *"      # -> 35.0

# Start the interactive REPL
python rpn.py
```

## Test it

```bash
python -m pytest test_rpn.py   # with pytest
python test_rpn.py             # or the built-in fallback runner
```

Requires Python 3.9+. No third-party dependencies.
