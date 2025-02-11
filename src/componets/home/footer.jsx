import React from "react";

function HomeFooter() {
  return (
    <footer>
      <div className="footer text-center">
        &copy; 2006 - {new Date().getFullYear()} Obafemi Awolowo University
      </div>
    </footer>
  );
}

export default HomeFooter;
