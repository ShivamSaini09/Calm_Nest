
PYTHON_VERSION=${PYTHON_VERSION:-3.10.8}
PYTHON_DIR="/opt/render/project/.venv"

echo "Creating Python virtual environment..."
python3 -m venv $PYTHON_DIR
source $PYTHON_DIR/bin/activate

echo "Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
