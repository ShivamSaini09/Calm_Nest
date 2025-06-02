import os
import joblib
import json
import sys

# DASS-42 question mapping (1-based to 0-based index correction)
DASS_keys = {
    'Depression': [3, 5, 10, 13, 16, 17, 21, 24, 26, 31, 34, 37, 38, 42],
    'Anxiety':    [2, 4, 7, 9, 15, 19, 20, 23, 25, 28, 30, 36, 40, 41],
    'Stress':     [1, 6, 8, 11, 12, 14, 18, 22, 27, 29, 32, 33, 35, 39]
}

# Convert to 0-based indices
DASS_keys = {k: [i - 1 for i in v] for k, v in DASS_keys.items()}

try:
    # Try to convert inputs to integers
    responses = list(map(int, sys.argv[1:]))
    
    # Check input length
    if len(responses) != 42:
        raise ValueError("Expected 42 integer inputs.")
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)

# Extract model-specific inputs
dp_input = [responses[i] for i in DASS_keys['Depression']]
ax_input = [responses[i] for i in DASS_keys['Anxiety']]
st_input = [responses[i] for i in DASS_keys['Stress']]

# Load models
base_path = os.path.dirname(__file__)
ax_model = joblib.load(os.path.join(base_path, "ax_best_model.pkl"))
dp_model = joblib.load(os.path.join(base_path, "dp_best_model.pkl"))
st_model = joblib.load(os.path.join(base_path, "st_best_model.pkl"))

# Predict and return results
result = {
    "anxiety": int(ax_model.predict([ax_input])[0]),
    "depression": int(dp_model.predict([dp_input])[0]),
    "stress": int(st_model.predict([st_input])[0])
}

print(json.dumps(result))
