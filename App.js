// Replace these with your contract's address and ABI
const contractAddress = '0xd2a5bC10698FD955D1Fe6cb468a17809A08fd005';
const contractABI = [
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "setValue1",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "setValue2",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getValue1",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getValue2",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "value1",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "value2",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	
];

window.addEventListener('load', async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a contract instance
        const myContract = new web3.eth.Contract(contractABI, contractAddress);

        // Function to get values from the smart contract
        const getValues = async () => {
            try {
                const value1 = await myContract.methods.getValue1().call();
                const value2 = await myContract.methods.getValue2().call();
                document.getElementById('value1').textContent = value1;
                document.getElementById('value2').textContent = value2;
            } catch (error) {
                console.error('Error getting values:', error);
            }
        }

        // Function to set value1 in the smart contract
        const setValue1 = async () => {
            const value1 = document.getElementById('value1Input').value;
            try {
                await myContract.methods.setValue1(value1).send({ from: ethereum.selectedAddress });
                alert('Value 1 set successfully!');
                getValues(); // Refresh values
            } catch (error) {
                console.error('Error setting value 1:', error);
            }
        }

        // Function to set value2 in the smart contract
        const setValue2 = async () => {
            const value2 = document.getElementById('value2Input').value;
            try {
                await myContract.methods.setValue2(value2).send({ from: ethereum.selectedAddress });
                alert('Value 2 set successfully!');
                getValues(); // Refresh values
            } catch (error) {
                console.error('Error setting value 2:', error);
            }
        }

        // Attach the functions to the window object to make them globally accessible
        window.getValues = getValues;
        window.setValue1 = setValue1;
        window.setValue2 = setValue2;

        // Call getValues on page load to display initial values
        getValues();
    } else {
        alert('Please install MetaMask or another Ethereum wallet.');
    }
});
