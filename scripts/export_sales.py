"""Export monthly gross sales (positive transactions only) from sales.db to sales.json."""
import json, sqlite3, pathlib
here = pathlib.Path(__file__).parent.parent / "src" / "data"
rows = sqlite3.connect(here / "sales.db").execute(
    "SELECT time_year, time_month, SUM(transaction_amount) FROM sales "
    "JOIN time USING(time_id) WHERE transaction_amount > 0 GROUP BY 1, 2 ORDER BY 1, 2")
M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
out = {}
for y, m, s in rows:
    out.setdefault(str(y), []).append({"month": M[m - 1], "sales": s})
(here / "sales.json").write_text(json.dumps(out, indent=1))
print({y: len(v) for y, v in out.items()})
