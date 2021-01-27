export const login = () => {
    const viewLogin = ` 
      <h1 href="#/">“PARENTBOOK”</h1>
      <div class="container">
        <div class="box">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      <containerLogin class="containerLogin">
        <input type="text" class="input_name" name="name" id="name" placeholder="User Name" />
        <input type="password" class="input_name" name="name" id="name" placeholder="Password" />
        <button class="buttonLogin">Log in</button>
        <containerIcons class="containerIcons">
          <icons class="socialIcons"><img src="images/02_Google_a.png" onclick="ir_google()"/></icons>
          <icons class="socialIcons"><img src="images/01_Facebook.png" onclick="ir_face()"/></icons>
        </containerIcons>
        <h2>Registrate</h2>
      </containerLogin>
      `
    return viewLogin;
};