# Task

### Setup

### 1. **Redis**
Use the following commands for setting up Redis.
- **Installation**
    ```bash
    sudo apt update
    sudo apt install redis-server
    ```

- **Start up**
    ```bash
    sudo service start redis-server
    ```

- **Verifying installation**
    ```bash
    redis-cli ping
    ```
    Ths above command should return the following output :
    ```bash
    PONG
    ```

### 2. **Test**
    ```bash
        node index.js
    ```

<!-- TODO -->
