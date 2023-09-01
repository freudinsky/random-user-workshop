const Contact = ({user}) => {
  return (
    <>
      <p>Address: {user.location.street.name} {user.location.street.number}<br />{user.location.postcode} {user.location.city} </p>
      <p>Email: {user.email} </p>
      <p>Phone number: {user.phone} </p>
    </>
  );
};

export default Contact;
