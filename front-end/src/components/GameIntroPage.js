.page-wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
  /* justify-content: center; */
  min-height: 100vh;
}

.game-intro-title {
  font-size: 3rem;
  align-self: center;
  justify-self: center;
  text-align: center;
  text-transform: uppercase;
  font-family: Oswald;
  font-weight: bolder;
  text-shadow: -4px 0 #eedf5b;
  color: #b95c77;
  padding: 2rem;
}

.game-rules {
  border-radius: 1rem;
  width: 700px;
  height: auto;
  background-color: #efedea;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  border: 1px solid #eedf5b;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
  align-self: center;
  text-align: justify;
  padding: 20px;
  margin: 20px;
}

.level-select-text {
  border-radius: 2rem;
  width: 300px;
  height: 70px;
  background-color: #eedf5b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  border: 1px solid #efedea;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);

  justify-self: center;
  text-align: center;
  padding: 20px;
  margin: 20px;
}

.level-select-container {
  display: flex;
  justify-self: center;
  align-self: center;
}

.level-button {
  border-radius: 2rem;
  width: 200px;
  height: 70px;
  background-color: #efedea;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  border: none;
  font-size: 1.5rem;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
  justify-self: center;
  text-align: center;
  padding: 20px;
  margin: 20px;
}

.level-button:hover {
  background-color: #eedf5b;
  box-shadow: 0px 15px 20px rgba(238, 233, 91, 0.4);
  color: white;
  transform: translateY(-7px);
}

@media screen and (max-width: 600px) {
  .page-wrapper {
    display: flex;
    flex-direction: column;
  }

  .game-rules {
    border-radius: 2rem;
    width: auto;
    height: auto;
    background-color: #efedea;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 3;
    font-size: 1.2rem;
    border: 1px solid #eedf5b;
    box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
    justify-self: center;
    text-align: justify;
    padding: 20px;
  }

  .level-select-text {
    width: 333px;
    height: 80px;
    justify-self: center;
    text-align: center;
    padding: 20px;
  }

  .level-select-container {
    margin: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
