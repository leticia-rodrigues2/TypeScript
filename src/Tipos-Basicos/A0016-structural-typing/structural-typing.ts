type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; passoword: number };

const VerifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username &&
    user.passoword === sentValue.passoword
  );
};

const bdUser = { username: "Leticia", passoword: 12345678 };
const sentUser = { username: "Leticia", passoword: 12345678, permissions: "" };
const loggedIn = VerifyUser(bdUser, sentUser);
console.log(loggedIn);

if (!loggedIn) {
  console.log("Não foi possivel logar !");
} else {
  console.log("Logado !");
}
