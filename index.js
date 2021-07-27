function getCountries() {
    fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET"
    })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((users) => loadUsers(users));
  }
  
  function loadUsers(users) {
    const userList = document.createElement("div");
    userList.className = "user-list";
    users.forEach((user) => {
      const userContainer = document.createElement("div");
      userContainer.className = "user-container";
  
      userContainer.innerHTML = `
      <img class="user-flag"  src=${user.flag}> </img>
      <div>
        <h3 class="user-name"><b>Country:</b>${user.name}</h3>
        <h3 class="user-name1">Population:${user.population}</h3>
        <h3 class="user-name1">Region:${user.region}</h3>
        <h3 class="user-name1">Capital:${user.capital}</h3>
      </div>
      `;
  
      userList.append(userContainer);
    });
  
    document.body.append(userList);
  }
  getCountries();
  