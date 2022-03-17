database = {
  1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000, transaction: [] },
  1001: { acno: 1001, uname: "Vyom", password: 1001, balance: 5000, transaction: [] },
  1002: { acno: 1002, uname: "Laisha", password: 1002, balance: 5000, transaction: [] }

}

// register definition
const register = (acno, password, uname) => {

  if (acno in database) {
    return {
      statusCode: 422,
      status: false,
      message: "user already exists..pls login"
    }
  }
  else {
    database[acno] = {
      acno,
      uname,
      password,
      balance: 0,
      transaction: []
    }
    console.log(database)

    return {
      statusCode: 200,
      status: true,
      message: "successfully registered"
    }


  }

}

// login definition

const Login = (acno, password) => {
  if (acno in database) {

    if (password == database[acno]["password"]) {
      currentAcno = acno
      currentUname = database[acno]["uname"]
      return {
        statusCode: 200,
        status: true,
        message: "successfully login",
        currentAcno,
        currentUname
      }
    }
    else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect Password"
      }

    }
  }
  else {
    return {
      statusCode: 422,
      status: false,
      message: "User Doesnot Exsist"
    }
  }
}


// deposit

const deposit = (acno, password, amt) => {
  var amount = parseInt(amt)
  if (acno in database) {
    if (password == database[acno]["password"]) {
      database[acno]["balance"] = database[acno]["balance"] + amount
      database[acno]["transaction"].push({
        amount: amount,
        type: "CREDIT"

      })
      // console.log(database);
      return {
        statusCode: 200,
        status: true,
        message: amount + "successfully deposited and new balance is" + database[acno]["balance"]
      }



    }
    else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect Password"
      }
    }

  } else {
    return {

      statusCode: 422,
      status: false,
      message: "User Doesnot Exsist"

    }
  }
}



module.exports = {
  register,
  Login,
  deposit
}