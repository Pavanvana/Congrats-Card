const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="congrats-heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="img-style"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="person-name">Kiran V</h1>
      <p className="description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram.
      </p>
      <img
        className="img-style"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
