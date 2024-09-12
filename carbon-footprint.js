document.getElementById('carbon-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const coalUsed = parseFloat(document.getElementById('coal-used').value);
    const fuelUsed = parseFloat(document.getElementById('fuel-used').value);
    
    // Basic formula for carbon footprint calculation (example)
    const carbonFootprint = (coalUsed * 2.86) + (fuelUsed * 2.31);
    
    document.getElementById('result').innerHTML = `
        <h3>Your Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO2</h3>
    `;
});
