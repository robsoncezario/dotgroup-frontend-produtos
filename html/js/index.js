const arrow = document.getElementById("gotoArrow");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const phoneInput = document.getElementById("phoneInput");
const submitBtn = document.getElementById("submitBtn");

const handleArrowClick = () => {
  const el = document.getElementById("imageContainer");
  el.scrollIntoView({behavior: "smooth"});
}

arrow.addEventListener("mousedown", handleArrowClick);

const checkForValidation = () => {
  const emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = phoneInput.value.length == 15 &&
    nameInput.value.trim().length > 0 && 
    messageInput.value.trim().length > 0 && 
    emailRegexp.test(emailInput.value);

  submitBtn.classList.toggle("disabled", !isValid);
}

nameInput.addEventListener("input",  checkForValidation);
emailInput.addEventListener("input", checkForValidation);
messageInput.addEventListener("input", checkForValidation);

const inputHandler = (masks, max, event) => {
	const c = event.target;
	const v = c.value.replace(/\D/g, '');
  const m = c.value.length > max ? 1 : 0;
  
	VMasker(c).unMask();
  VMasker(c).maskPattern(masks[m]);
  
  c.value = VMasker.toPattern(v, masks[m]);

  checkForValidation();
}

const telMask = ['(99) 9999-99999', '(99) 99999-9999'];

VMasker(phoneInput).maskPattern(telMask[0]);
phoneInput.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);


