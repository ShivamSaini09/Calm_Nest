PYTHON_VERSION=${PYTHON_VERSION:-3.11.11}
PYTHON_DIR="/opt/render/project/.venv"

echo "Creating Python virtual environment..."
python3 -m venv $PYTHON_DIR
source $PYTHON_DIR/bin/activate

echo "Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo "Ensuring venv Python is used by default..."
echo "export PATH=\"$PYTHON_DIR/bin:\$PATH\"" >> ~/.bashrc
source ~/.bashrc
