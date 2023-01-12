function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const dr = medicalSchool('Noah Lett');
const attorney = lawSchool('Noah Lett');

console.log(dr);
console.log(attorney);
