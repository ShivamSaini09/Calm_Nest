
PYTHON_VERSION=${PYTHON_VERSION:-3.10.8}
PYTHON_DIR="/opt/render/project/.venv"

if [ ! -d "$PYTHON_DIR" ]; then
  echo "Installing Python $PYTHON_VERSION..."
  curl -sSL https://install.python-poetry.org | python3 -
  sudo apt-get update
  sudo apt-get install -y python3-pip python3-venv
fi

python3 -m venv $PYTHON_DIR
source $PYTHON_DIR/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
