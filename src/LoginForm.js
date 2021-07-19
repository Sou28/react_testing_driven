import React, { useState } from "react";

const LoginForm  = () => {
    return (
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" />

        <label htmlFor="password">Password:</label>
        <input id="password" />

        <button type="submit">Submit</button>
      </form>
    );
}

export default LoginForm