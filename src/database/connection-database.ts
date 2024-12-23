export async function createConnection(): Promise<any> {
    return new Promise((resolve, reject) => {
        console.log('Connecting to database...');

        // Simulating connection delay
        setTimeout(() => {
            const isConnected = true; // Simulate success or failure

            if (isConnected) {
                console.log('Database connected successfully!');
                resolve({
                    status: 'connected',
                    query: (sql: string) => {
                        console.log(`Executing query: ${sql}`);
                        // Simulate a response
                        return `Results for query: "${sql}"`;
                    },
                });
            } else {
                console.error('Failed to connect to database.');
                reject(new Error('Database connection failed.'));
            }
        }, 1000); // Simulate a 1-second delay
    });
}
