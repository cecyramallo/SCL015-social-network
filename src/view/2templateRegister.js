export const register = () => {
    const viewRegister = ` 
      <h1 href="#/register">“PARENTBOOK”</h1>
      <div class="container">
        <div class="box">
          <img src="images/05_Family_b.jpg"/>
        </div>
      </div> 
      <containerLogin class="containerLogin">
        <p>SIGN UP!</p>
        <input type="text" class="input_name" name="name" id="name" placeholder="First Name"/>
        <input type="text" class="input_name" name="name" id="name" placeholder="Last Name"/>
        <input type="text" class="input_name" name="name" id="name" placeholder="E-mail"/>
        <input type="password" class="input_name" name="name" id="name" placeholder="Password"/>
        <button class="buttonLogin">Sign up</button>
        <p>Or sign in with</p>
        <containerIcons class="containerIcons">
          <icons class="socialIcons"><img src="images/02_Google_a.png" onclick="ir_google()"/></icons>
          <icons class="socialIcons"><img src="images/01_Facebook.png" onclick="ir_face()"/></icons>
        </containerIcons>
      </containerLogin>
      `
      
    return viewRegister;
};