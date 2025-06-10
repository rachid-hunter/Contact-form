import { useState } from "react";

function App() {
  const [informations, setInformations] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    term: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    queryType: false,
    message: false,
    term: false,
  });

  const [showAlert, setShowAlert] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      firstName: !informations.firstName.trim(),
      lastName: !informations.lastName.trim(),
      email: !informations.email.trim(),
      queryType: !informations.queryType.trim(),
      message: !informations.message.trim(),
      term: !informations.term,
    };

    setErrors(newErrors);

    // cheak if form valid

    const isFormInvalid = Object.values(newErrors).some((error) => error);

    if (isFormInvalid) {
      return; // Don't proceed if form is invalid
    }

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    console.log(informations);
  };

  return (
    <div className="container">
      <div className="alert" style={{ display: showAlert ? "block" : "none" }}>
        <div className="sent">
          <img src="src\assets\icon-success-check.svg" />
          <h3>message sent!</h3>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>

      <h1>Contact Us</h1>

      <form onSubmit={handelSubmit}>
        <div className="row">
          <div className="input-block">
            <p>
              First Name <span>•</span>
            </p>
            <input
              type="text"
              value={informations.firstName}
              onChange={(e) => {
                setInformations({ ...informations, firstName: e.target.value });

                setErrors({ ...errors, firstName: false });
              }}
              style={{ border: errors.firstName ? "solid 1px var(--Red)" : "" }}
            />
            {errors.firstName && (
              <p className="error-message">This field is required</p>
            )}
          </div>

          <div className="input-block">
            <p>
              Last Name <span>•</span>
            </p>
            <input
              type="text"
              value={informations.lastName}
              onChange={(e) => {
                setInformations({ ...informations, lastName: e.target.value });

                setErrors({ ...errors, lastName: false });
              }}
              style={{ border: errors.lastName ? "solid 1px var(--Red)" : "" }}
            />
            {errors.firstName && (
              <p className="error-message">This field is required</p>
            )}
          </div>
        </div>

        <div className="input-block">
          <p>
            Email Address <span>•</span>
          </p>
          <input
            type="email"
            value={informations.email}
            onChange={(e) => {
              setInformations({ ...informations, email: e.target.value });

              setErrors({ ...errors, email: false });
            }}
            style={{ border: errors.email ? "solid 1px var(--Red)" : "" }}
          />
          {errors.firstName && (
            <p className="error-message">Pleas enter a valid email addres</p>
          )}
        </div>

        <div className="radio-block">
          <p>
            Query Type <span>•</span>
          </p>
          <div className="row">
            <div
              className={`radio-box ${
                informations.queryType === "enq" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                id="enquiry"
                value="enq"
                onChange={(e) => {
                  setInformations({
                    ...informations,
                    queryType: e.target.value,
                  });

                  setErrors({ ...errors, queryType: false });
                }}
              />
              <label htmlFor="enquiry">Pleaz select a query type</label>
            </div>

            <div
              className={`radio-box ${
                informations.queryType === "req" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                id="request"
                value="req"
                onChange={(e) => {
                  setInformations({
                    ...informations,
                    queryType: e.target.value,
                  });
                }}
              />
              <label htmlFor="request">Support Request</label>
            </div>
          </div>
          {errors.firstName && (
            <p className="error-message">This field is required</p>
          )}
        </div>

        <div className="text-box">
          <p>
            Message <span>•</span>
          </p>
          <textarea
            value={informations.message}
            onChange={(e) => {
              setInformations({ ...informations, firstName: e.target.value });

              setErrors({ ...errors, firstName: false });
            }}
            style={{ border: errors.firstName ? "solid 1px var(--Red)" : "" }}
          ></textarea>
          {errors.firstName && (
            <p className="error-message">This field is required</p>
          )}
        </div>

        <div className="chek-box">
          <input
            type="checkbox"
            id="tearm"
            className="check"
            checked={informations.term}
            onChange={(e) =>
              setInformations({ ...informations, term: e.target.checked })
            }
          />

          <label htmlFor="tearm">
            I consent to being contacted by the team <span>•</span>
          </label>
        </div>
        {errors.firstName && (
          <p className="error-message" style={{ margin: "0" }}>
            To submitthis form, please consent to being contacted
          </p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
