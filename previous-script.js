document.addEventListener('DOMContentLoaded', function() {
    const miningForm = document.getElementById('mining-data-form');
    const miningDataTable = document.getElementById('mining-data-table').getElementsByTagName('tbody')[0];
    
    // Load existing data from localStorage
    let miningData = JSON.parse(localStorage.getItem('miningData')) || [];

    // Function to add data to the table
    function addDataToTable(data) {
        const row = miningDataTable.insertRow();
        row.insertCell(0).innerText = new Date(data.timestamp).toLocaleString();
        row.insertCell(1).innerText = data.coal;
        row.insertCell(2).innerText = data.fuel;
        row.insertCell(3).innerText = data.electricity;
    }

    // Populate the table with saved data
    miningData.forEach(addDataToTable);

    // Handle form submission
    miningForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newMiningData = {
            coal: parseFloat(document.getElementById('coal').value),
            fuel: parseFloat(document.getElementById('fuel').value),
            electricity: parseFloat(document.getElementById('electricity').value),
            timestamp: Date.now()
        };

        // Save data in localStorage
        miningData.push(newMiningData);
        localStorage.setItem('miningData', JSON.stringify(miningData));

        // Add new data to the table
        addDataToTable(newMiningData);

        // Clear the form
        miningForm.reset();
    });
});
