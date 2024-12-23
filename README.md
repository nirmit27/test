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
- If you have followed along, you should get the following **output** :
  ```bash
    { prefix: 'cache-prefix', url: 'redis://127.0.0.1:6379' }
    redis client is connectig to { prefix: 'cortex-prefix', url: 'redis://127.0.0.1:6379' }
    redis client is connectig to { prefix: 'cortex-prefix', url: 'redis://127.0.0.1:6379' }
    Test Data: Redis Test Done.
    redis client is connectig to { url: 'redis://127.0.0.1:6379' }
    redis client is connectig to { prefix: 'cortex-prefix', url: 'redis://127.0.0.1:6379' }
    redis client is connectig to { url: 'redis://127.0.0.1:6379' }
    DEV-SERVICE is running on port: 5111
    Test Data: Redis Test Done.
    Test Data: Redis Test Done.
    Cache Test Data: Redis Test Done.
    Test Data: Redis Test Done.
    Test Data: Redis Test Done.
  ```

<!-- TODO -->
