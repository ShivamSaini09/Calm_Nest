import os
import joblib
import json
import sys

args = list(map(int, sys.argv[1:]))
ax_input = args[:14]
dp_input = args[14:28]
st_input = args[28:]

base_path = os.path.dirname(__file__)

ax_model = joblib.load(os.path.join(base_path, "ax_best_model.pkl"))
dp_model = joblib.load(os.path.join(base_path, "dp_best_model.pkl"))
st_model = joblib.load(os.path.join(base_path, "st_best_model.pkl"))

result = {
    "anxiety": int(ax_model.predict([ax_input])[0]),
    "depression": int(dp_model.predict([dp_input])[0]),
    "stress": int(st_model.predict([st_input])[0])
}

print(json.dumps(result))
