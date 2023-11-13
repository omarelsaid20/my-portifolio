function MyIcon({ darkMode }) {
  return (
    <>
      {darkMode ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </>
  );
}

export default MyIcon;
