//Question 2
//Make a call to the following API endpoint:
//https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating
//Loop through the results and display the following properties in HTML, but only for the first eight results:name
//rating
//number of tags (not the tag details, just the amount of tags)
//The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.
//Be sure to handle any potential errors in the code.
//You can use either regular promise or async/await syntax to make the call.

const basicUrl =
	'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

async function getGamesInfo(url) {
	try {
		const response = await fetch(url);
		const jsonObject = await response.json();
		console.log(jsonObject.results);

		document.querySelector('.loading').classList.add('hide');

		for (let i = 0; i < jsonObject.results.length; i++) {
			document.querySelector('main').innerHTML += `
                <div class="card">
                <h2>Name: ${jsonObject.results[i].name}</h2>
                <p>Rating: ${jsonObject.results[i].rating}</p>
                <p>Number of tags: ${jsonObject.results[i].tags.length}</p>
                </div>
                `;
			if (i === 7) {
				break;
			}
		}
	} catch (error) {
		document.querySelector('.alert').innerHTML += showAlertTouser(
			'An error occured please contact Alexander Hansen',
			'danger'
		);
		console.log(error);
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getGamesInfo(basicUrl);
