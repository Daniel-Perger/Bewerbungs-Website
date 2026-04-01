function zeigeLebenslauf() {
    document.getElementById("content").innerHTML = `
        <h2>Lebenslauf</h2>
    `;
	document.getElementById("extraButton").style.display = "block";
	
	document.getElementById("extraButton").innerHTML = `
		<button onclick="zeigeSchule()">
            Schulische Ausbildung anzeigen
        </button>
    `;

function zeigeSchule() {
	document.getElementById("extraButton").innerHTML = `
		<h2>Schulische Ausbildung</h2>
		<p>09/2025 bis 03/2026: Schule für allgemeine Gesundheits- und Krankenpflege, Neunkirchen</p>
		<p>09/2024 bis 01/2025: Schule für allgemeine Gesundheits- und Krankenpflege, Neunkirchen</p>
		<p>09/2022 bis 06/2023: Handelsakademie, Neunkirchen</p>
		<p>09/2018 bis 07/2022: Bilingual Junior High School, Wiener Neustadt</p>
	`;
}