// suppose "namelist" array er modde 'Rakib' name arekta element push kore dilam. akhon jodi 'namelist' array access korte jai, tahole kinto sheta ager moto pabo na. array change/mutant hoye jabe. ei problem solve korara jonno noton akta array kule shekhane spreed operator(...) er maddome ager array ke copy kore then noton element boshate hobe.
const nameList = ['Mahmodul', 'Hasan'];
const newNameList = [...nameList, 'Shahin'];
