const menuMobile = document.querySelector('.menuMobile')
const divBefor = menuMobile.querySelector('.divBefor')
const divCenter = menuMobile.querySelector('.divCenter')
const divAffter = menuMobile.querySelector('.divAffter')
var ShowMenuMobile = false
menuMobile.onclick = function(){
  if (ShowMenuMobile){
    divCenter.style.width = "27px"
    divBefor.style.transform = "rotateZ(0deg)"
    divBefor.style.top = "0px"
    divAffter.style.transform = "rotateZ(0deg)"
    divAffter.style.bottom = "0px"
    ShowMenuMobile = !ShowMenuMobile
  }else{
    divCenter.style.width = "0px"
    divBefor.style.transform = "rotateZ(45deg)"
    divBefor.style.top = "8px"
    divAffter.style.transform = "rotateZ(-45deg)"
    divAffter.style.bottom = "8px"
    ShowMenuMobile = !ShowMenuMobile
  }
  
}
//========= Validator ================
const LoginElement = document.querySelector(".Login");
const RegisterElement = document.querySelector(".register");
const FromPage = document.querySelector(".FromPage");
var ShowForm = true;
const ShowLoginFrom = () => {
  if (document.querySelector("#registerFrom")) {
    FromPage.style.bottom = "-100%";
    dePlay = setTimeout(() => {
      FromPage.innerHTML = FromComponent("Login");
      FromPage.style.bottom = "0%";
      ShowForm = !ShowForm;
    }, 800);
  }
  if (ShowForm) {
    FromPage.innerHTML = FromComponent("Login");
    FromPage.style.bottom = "0%";
    ShowForm = !ShowForm;
  } else {
    FromPage.style.bottom = "-100%";
    ShowForm = !ShowForm;
  }
};
const ShowRegisterFrom = () => {
  if (document.querySelector("#loginFrom")) {
    FromPage.style.bottom = "-100%";
    setTimeout(() => {
      FromPage.innerHTML = FromComponent("register");
      FromPage.style.bottom = "0%";
      ShowForm = !ShowForm;
    }, 800);
  }
  if (ShowForm) {
    FromPage.innerHTML = FromComponent("register");
    FromPage.style.bottom = "0%";
    ShowForm = !ShowForm;
  } else {
    FromPage.style.bottom = "-100%";
    ShowForm = !ShowForm;
  }
};
LoginElement.onclick = (e) => {
  ShowLoginFrom();
};
RegisterElement.onclick = () => {
  ShowRegisterFrom();
};
const ValueFormRegister = {
  Email: "",
  Password: "",
  userName: "",
  fullName: "",
  PasswordConfirm: "",
};
const ErrorMessageFormRegister = {
  Email: "",
  Password: "",
  userName: "",
  fullName: "",
  PasswordConfirm: "",
};
const ValueFormLogin = { Password: "", userName: "" };
const ErrorMessageFormLogin = { Password: "", userName: "" };
const handlechange = (props) => {
  if (props.from === "register") {
    console.log(ValueFormRegister.Email);
    switch (props.type.toUpperCase()) {
      case "EMAIL":
        ValueFormRegister.Email = props.value;
        break;
      case "PASSWORD":
        ValueFormRegister.Password = props.value;
        break;
      case "USERNAME":
        ValueFormRegister.userName = props.value;
        break;
      case "FULLNAME":
        ValueFormRegister.fullName = props.value;
        break;
      case "PASSWORDCONFIRM":
        ValueFormRegister.PasswordConfirm = props.value;
        break;
    }
  } else if (props.from === "Login") {
    switch (props.type.toUpperCase()) {
      case "USERNAME":
        ValueFormLogin.userName = props.value;
        break;
      case "PASSWORD":
        ValueFormLogin.Password = props.value;
        break;
    }
  }
};
const validate = (props) => {
  if (props.from === "register") {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let elmentErr = FromPage.querySelector(`#${props.value.toLowerCase()}err`);
    if (ValueFormRegister[props.value] === "") {
      ErrorMessageFormRegister[props.value] = "Trường này là bắt buộc";
      elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
      elmentErr.style.color = "red";
    } else {
      switch (props.typeValidate.toUpperCase()) {
        case "EMAIL":
          if (ValueFormRegister[props.value].match(mailformat)) {
            ErrorMessageFormRegister[props.value] = "Success";
            elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
            elmentErr.style.color = "green";
          } else {
            ErrorMessageFormRegister[props.value] =
              "Email không đúng định dạng";
            elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
            elmentErr.style.color = "red";
          }
          break;
        case "CHECKLENGTH":
          if (ValueFormRegister[props.value].length < props.minLength) {
            ErrorMessageFormRegister[
              props.value
            ] = `Tối thiểu ${props.minLength} ký tự`;
            elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
            elmentErr.style.color = "red";
          } else {
            ErrorMessageFormRegister[props.value] = "Success";
            elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
            elmentErr.style.color = "green";
          }
          break;
        case "PASSWORD":
          if (ValueFormRegister[props.value].length < props.minLength) {
            ErrorMessageFormRegister[
              props.value
            ] = `Tối thiểu ${props.minLength} ký tự`;
            elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
            elmentErr.style.color = "red";
          } else {
            if (ValueFormRegister.PasswordConfirm === "") {
              ErrorMessageFormRegister[props.value] = "Success";
              elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
              elmentErr.style.color = "green";
            } else if (
              ValueFormRegister[props.value] ===
              ValueFormRegister.PasswordConfirm
            ) {
              ErrorMessageFormRegister[props.value] = "Success";
              ErrorMessageFormRegister.PasswordConfirm = "Success";
              elmentErr.style.color = "green";
              elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
              document.querySelector("#passwordconfirmerr").style.color =
                "green";
              document.querySelector("#passwordconfirmerr").innerHTML =
                "Success";
            } else {
              ErrorMessageFormRegister[props.value] = "Success";
              elmentErr.style.color = "green";
              ErrorMessageFormRegister.PasswordConfirm =
                "Mật Khẩu Nhập Lại Không Chính Xác";
              elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
              document.querySelector("#passwordconfirmerr").style.color = "red";
              document.querySelector("#passwordconfirmerr").innerHTML =
                "Mật Khẩu Nhập Lại Không Chính Xác";
            }
          }
          break;
        case "PASSWORDCONFIRM":
          if (ValueFormRegister[props.value].length < props.minLength) {
            ErrorMessageFormRegister[
              props.value
            ] = `Tối thiểu ${props.minLength} ký tự`;
            elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
            elmentErr.style.color = "red";
          } else {
            if (ValueFormRegister.Password === "") {
              ErrorMessageFormRegister[props.value] = "Bạn Chưa Nhập Mật Khẩu";
              elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
              elmentErr.style.color = "red";
            } else if (!(ValueFormRegister[props.value] === ValueFormRegister.Password)) {
              ErrorMessageFormRegister[props.value] =
                "Mật Khẩu Nhập Lại Không Chính Xác";
              elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
              elmentErr.style.color = "red";
            } else {
              ErrorMessageFormRegister[props.value] = "Success";
              elmentErr.style.color = "green";
              elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
            }
          }
          break;
        default:
          ErrorMessageFormRegister[props.value] =
            "type validate chưa được định dạng";
          elmentErr.innerHTML = ErrorMessageFormRegister[props.value];
          elmentErr.style.color = "red";
      }
    }
  } else if (props.from === "Login") {
    console.log(`#${props.value.toLowerCase()}loginerr`);
    let elmentErr = FromPage.querySelector(
      `#${props.value.toLowerCase()}loginerr`
    );
    switch (props.typeValidate.toUpperCase()) {
      case "CHECKLENGTH":
        if (ValueFormLogin[props.value].length < props.minLength) {
          ErrorMessageFormLogin[
            props.value
          ] = `Tối thiểu ${props.minLength} ký tự`;
          elmentErr.innerHTML = ErrorMessageFormLogin[props.value];
          elmentErr.style.color = "red";
        } else {
          ErrorMessageFormLogin[props.value] = `Success`;
          elmentErr.innerHTML = ErrorMessageFormLogin[props.value];
          elmentErr.style.color = "green";
        }
        break;
      default:
        ErrorMessageFormLogin[props.value] =
          "type validate chưa được định dạng";
        elmentErr.innerHTML = ErrorMessageFormLogin[props.value];
        elmentErr.style.color = "red";
    }
  }
};
const validator = (props) => {
  let submit = false;
  props.event.preventDefault();
  if (props.from === "register") {
    Object.keys(ErrorMessageFormRegister).map((key) => {
      if (ErrorMessageFormRegister[key] === "") {
        FromPage.querySelector(`#${key.toLowerCase()}err`).innerHTML =
          "Trường này là bắt buộc";
      }
      if (!(ErrorMessageFormRegister[key] === "Success")) {
        return (submit = false);
      } else {
        submit = true;
      }
      return submit;
    });
  } else if (props.from === "Login") {
    Object.keys(ErrorMessageFormLogin).map((key) => {
      if (ErrorMessageFormLogin[key] === "") {
        FromPage.querySelector(`#${key.toLowerCase()}loginerr`).innerHTML =
          "Trường này là bắt buộc";
      }
      if (!(ErrorMessageFormLogin[key] === "Success")) {
        return (submit = false);
      } else {
        submit = true;
      }
      return submit;
    });
  }
};
const FromComponent = (fromName) => {
  const eysClose = `<svg><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>`
  const eys = `<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>`
  switch (fromName) {
    case "Login":
      return `<div class="FromGroups" id="from1">
                <div class="fromItem">
                  <div class="logoFrom">
                    <i class="fa-solid fa-user"></i>
                  </div>
                </div>
                <h4>Đăng nhập</h4>
                <form id="loginFrom">
                  <input type="Text" placeholder="Tài Khoản *"
                    value="${ValueFormLogin.userName}" onchange='handlechange({value:event.target.value , type: "userName", from:"Login"})' 
                    onblur="validate({typeValidate:'checklength',value:'userName', minLength:6, from:'Login'})"
                  />
                  <p class='fromMessage'id='usernameloginerr'></p>
                  <input type="password" placeholder="Mật Khẩu *"
                    value="${ValueFormLogin.Password}" onchange='handlechange({value:event.target.value , type: "password",from:"Login"})' 
                    onblur="validate({typeValidate:'checklength',value:'Password', minLength:8, from:'Login'})"
                  />
                  <p class='fromMessage'id='passwordloginerr'></p>
                  <button onclick='validator({event:event , from:"Login"})'>Đăng Nhập</button>
                </form>
                <div class='helpBox'><p>Bạn chưa có tài khoản? &nbsp;<p id='nextPage' onclick='ShowRegisterFrom()'>Đăng ký</p></p></div>
              </div>`;
    case "register":
      return `<div class="FromGroups" id="from1">
                <div class="fromItem">
                  <div class="logoFrom">
                    <i class="fa-solid fa-user"></i>
                  </div>
                </div>
                <h4>Đăng Ký</h4>
                <form id="registerFrom">
                  <input type="Text" placeholder="Tài Khoản *" id='userName'
                    value="${ValueFormRegister.userName}" onchange='handlechange({value:event.target.value , type: "userName",from:"register"})' 
                    onblur="validate({typeValidate:'checklength',value:'userName', minLength:6, from:'register'})"
                  />
                  <p class='fromMessage'id='usernameerr'>${ErrorMessageFormRegister.userName}</p>
                  <input type="Email" placeholder="Email *" 
                    value="${ValueFormRegister.Email}" onchange='handlechange({value:event.target.value , type: "email",from:"register"})' 
                    onblur="validate({typeValidate: 'email',from:'register' , value:'Email'})"
                  />
                  <p class='fromMessage' id='emailerr'>${ErrorMessageFormRegister.Email}</p>
                  <input type="Text" placeholder="Tên Đầy Đủ *" id='fullName'
                    value="${ValueFormRegister.fullName}" onchange='handlechange({value:event.target.value , type: "fullName",from:"register"})' 
                    onblur="validate({typeValidate:'checklength', value: 'fullName', minLength: 6 , from:'register'})"
                  />
                  <p class='fromMessage'id='fullnameerr'>${ErrorMessageFormRegister.fullName}</p>
                  <input type="password" placeholder="Mật Khẩu *" id='password'
                    value="${ValueFormRegister.Password}" onchange='handlechange({value:event.target.value , type: "password",from:"register"})' 
                    onblur="validate({typeValidate:'Password', value: 'Password', minLength: 8 , from:'register'})"
                  />
                  <p class='fromMessage'id='passworderr'>${ErrorMessageFormRegister.Password}</p>
                  <input type="password" placeholder="Nhập lại Mật Khẩu *" id='PasswordConfirm'
                    value="${ValueFormRegister.PasswordConfirm}" onchange='handlechange({value:event.target.value , type: "PasswordConfirm",from:"register"})' 
                    onblur="validate({typeValidate:'PasswordConfirm', value:'PasswordConfirm', minLength: 8 , from:'register'})"
                  />
                  <p class='fromMessage' id='passwordconfirmerr'>${ErrorMessageFormRegister.PasswordConfirm}</p>
                  <button onclick='validator({event:event , from:"register"})'> Đăng Ký </button>
                </form>
                <div class='helpBox'><p>Bạn chưa có tài khoản? &nbsp;<p id='nextPage'onclick='ShowLoginFrom()'>Đăng Nhập</p></p></div>
              </div>`;
  }
};
/*****************************************/
var cinemaId = "BHDStar";
const addressCinemas = document.querySelector(".addressCinemas");
const LogoCinemas = document.querySelector(".LogoCinemas");
const Showtimes = document.querySelector(".Showtimes");
var data = [];
var addressCinemaId = 0;
const MenuBar = document.querySelector(".listItem");
const listItem = Array.from(MenuBar.getElementsByTagName("li"));
const Scrollbar = (element) => {
  window.scrollTo({
    top: document.querySelector(element).offsetTop - 128,
    behavior: "smooth",
  });
};
listItem[0].onclick = () => {
  Scrollbar(".ProductGroup");
  FromPage.style.bottom = "-100%";
  ShowForm = true;
};
listItem[1].onclick = () => {
  Scrollbar(".Movie");
  FromPage.style.bottom = "-100%";
  ShowForm = true;
};
listItem[2].onclick = () => {
  Scrollbar(".News");
  FromPage.style.bottom = "-100%";
  ShowForm = true;
};
listItem[3].onclick = () => {
  Scrollbar(".mobileApp");
  FromPage.style.bottom = "-100%";
  ShowForm = true;
};
const handleOnClickAddresses = (e) => {
  cinemaId = e.attributes.id.nodeValue;
  ShowDetails(cinemaId);
  LogoCinemas.querySelector(`#${cinemaId}`).style.borderRight =
    "2px solid rgba(0, 172, 77, 1)";
};
const handleOnMouseDownAddresses = () => {
  LogoCinemas.querySelector(`#${cinemaId}`).style.borderRight =
    "0px solid rgba(0, 172, 77, 0)";
  addressCinemas.style.overflowY = "none";
};
var index = 0;
const handleClickShowTime = (i) => {
  index = i;
  addressCinemas.querySelector(`#a${addressCinemaId}`).style.borderRight =
    "0px solid rgba(0, 172, 77, 0)";
  addressCinemaId = i;
  addressCinemas.querySelector(`#a${addressCinemaId}`).style.borderRight =
    "2px solid rgba(0, 172, 77, 1)";
  ShowDetailsTimer(index);
};
const ShowDetailsTimer = (index) => {
  if (data !== []) {
    const detailTimer = data[0].lstCumRap[index].danhSachPhim.map((item, i) => {
      const DayAndTime = item.lstLichChieuTheoPhim.map((DateTime) => {
        var day = DateTime.ngayChieuGioChieu.split("T")[0];
        var time = DateTime.ngayChieuGioChieu.split("T")[1];
        return `<div><a href='https://tcdtist-tix-clone.vercel.app/purchase/${DateTime.maLichChieu}'><p class='day'>${day}</p> ~ <p class='time'>${time}</p></a></div>`;
      });
      return `<div class="MovieTimer">
              <img src="${item.hinhAnh}">
              <div class="movieDetail">
                <h4><span>C18</span>${item.tenPhim}</h4>
                <div class="timer">${DayAndTime}</div>
              </div>
            </div>`;
    });
    Showtimes.innerHTML = detailTimer.join().replace(/,/g, "");
    var ShowTimeChildren = Array.from(
      Showtimes.querySelectorAll(".MovieTimer")
    );
    if (
      Showtimes.clientHeight <
      ShowTimeChildren.length * ShowTimeChildren[0].clientHeight
    ) {
      Showtimes.style.overflowY = "scroll";
    } else {
      Showtimes.style.overflowY = "hidden";
    }
  }
};
const ShowDetails = (id) => {
  const URLLichChieu = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP09`;

  fetch(URLLichChieu)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      data = res;
      const itemAddress = res[0].lstCumRap.map((item, i) => {
        return `<div class="addressCinema" id="a${i}" onclick="handleClickShowTime(${i})">
                            <h4>${item.tenCumRap}</h4>
                            <p>${item.diaChi}</p>
                            <span>[Chi Tiết]</span>
                        </div>`;
      });
      ShowDetailsTimer(index);
      addressCinemas.innerHTML = itemAddress.join().replace(/,/g, "");
      var arrChildren = Array.from(
        addressCinemas.querySelectorAll(".addressCinema")
      );
      if (
        addressCinemas.clientHeight <
        arrChildren.length * arrChildren[0].clientHeight
      ) {
        addressCinemas.style.overflowY = "scroll";
      } else {
        addressCinemas.style.overflowY = "hidden";
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

var rotateX = 0;
var rotateY = 0;
var isRotate = 0;
const UnderLine = document.querySelector("#Unline");
const Mattress = document.querySelector(".Mattress");
const tabNameList = Array.from(document.querySelectorAll(".tabName"));
const NewDetailTab = () => {
  tabNameList.map((tabName, i) => {
    tabName.onmousedown = (e) => {
      tabNameList.map((item) => {
        item.classList.remove("choose");
      });
    };
    tabName.onmouseup = (e) => {
      tabName.classList.add("choose");
      UnderLine.style.left = `calc(((100%-165px)/2) - 247.5px + 165px*${i})`;
      if (i != isRotate) {
        rotateY = rotateY - 120 * (i - isRotate);
        Mattress.style.transform = `rotateY(${rotateY}deg)`;
        isRotate = i;
      }
      NewDetails.style.height = "705px";
      btnNewstext = "Rút Gọn";
      btnNews.innerHTML = btnNewstext;
      ShowNews = false;
      rotateX = rotateX + 180;
      UnderLine.style.transform = `rotateX(${rotateX}deg)`;
    };
  });
};
const URLDataDienAnh = `https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02`;
const dienanhDetails = document.querySelector("#DA");
const reviewDetails = document.querySelector("#RV");
const KhuyenMaiDetails = document.querySelector("#KM");
fetch(URLDataDienAnh)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    const DAHotNews = `<div class="HotNewsItem">
                          <a href="${res[0].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[0].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[0].title}</h4>
                              <p>${res[0].text}</p>
                            </div>
                          </a>
                      </div>
                      <div class="HotNewsItem">
                          <a href="${res[1].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[1].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[1].title}</h4>
                              <p>${res[1].text}</p>
                            </div>
                          </a>
                      </div>
                      `;
    const DANewItem = `<div class="HotNewsItem">
                          <a href="${res[2].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[2].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[2].title}</h4>
                              <p>${res[2].text}</p>
                            </div>
                          </a>
                      </div>
                      <div class="HotNewsItem">
                          <a href="${res[3].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[3].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[3].title}</h4>
                              <p>${res[3].text}</p>
                            </div>
                          </a>
                      </div>`;
    const remaining = res.slice(4);
    const DAremaining = remaining.map((item) => {
      return `<div class = "remainingItem">
                <a href="${item.url}">
                  <img src="${item.img}">
                  <p>${item.title}</p>
                </a>
              </div>`;
    });
    dienanhDetails.querySelector(".HotNews").innerHTML = DAHotNews;
    dienanhDetails.querySelector(".NewItem").innerHTML = DANewItem;
    dienanhDetails.querySelector(".remaining").innerHTML =
      DAremaining.join().replace(/,/g, "");
  })
  .catch((err) => {
    console.log("dienanh:" + err);
  });

const URLDataReview = `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02`;

fetch(URLDataReview)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    const RVHotNews = `<div class="HotNewsItem">
                          <a href="${res[0].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[0].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[0].title}</h4>
                              <p>${res[0].text}</p>
                            </div>
                          </a>
                      </div>
                      <div class="HotNewsItem">
                          <a href="${res[1].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[1].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[1].title}</h4>
                              <p>${res[1].text}</p>
                            </div>
                          </a>
                      </div>
                      `;
    const RVNewItem = `<div class="HotNewsItem">
                          <a href="${res[2].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[2].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[2].title}</h4>
                              <p>${res[2].text}</p>
                            </div>
                          </a>
                      </div>
                      <div class="HotNewsItem">
                          <a href="${res[3].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[3].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[3].title}</h4>
                              <p>${res[3].text}</p>
                            </div>
                          </a>
                      </div>`;
    const remaining = res.slice(4);
    const RVremaining = remaining.map((item) => {
      return `<div class = "remainingItem">
                <a href="${item.url}">
                  <img src="${item.img}">
                  <p>${item.title}</p>
                </a>
              </div>`;
    });
    reviewDetails.querySelector(".HotNews").innerHTML = RVHotNews;
    reviewDetails.querySelector(".NewItem").innerHTML = RVNewItem;
    reviewDetails.querySelector(".remaining").innerHTML =
      RVremaining.join().replace(/,/g, "");
  })
  .catch((err) => {
    console.log("Review:" + err);
  });
const URLDataKhuyenMai = `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02`;

fetch(URLDataKhuyenMai)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    const KMHotNews = `<div class="HotNewsItem">
                          <a href="${res[0].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[0].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[0].title}</h4>
                              <p>${res[0].text}</p>
                            </div>
                          </a>
                      </div>
                      <div class="HotNewsItem">
                          <a href="${res[1].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[1].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[1].title}</h4>
                              <p>${res[1].text}</p>
                            </div>
                          </a>
                      </div>
                      `;
    const KMNewItem = `<div class="HotNewsItem">
                          <a href="${res[2].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[2].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[2].title}</h4>
                              <p>${res[2].text}</p>
                            </div>
                          </a>
                      </div>
                      <div class="HotNewsItem">
                          <a href="${res[3].url}">
                            <div class="HotNewsItemImg">
                              <img src="${res[3].img}">
                            </div>
                            <div class="HotNewsItemDetail">
                              <h4>${res[3].title}</h4>
                              <p>${res[3].text}</p>
                            </div>
                          </a>
                      </div>`;
    const remaining = res.slice(4);
    const KMremaining = remaining.map((item) => {
      return `<div class = "remainingItem">
                <a href="${item.url}">
                  <img src="${item.img}">
                  <p>${item.title}</p>
                </a>
              </div>`;
    });
    KhuyenMaiDetails.querySelector(".HotNews").innerHTML = KMHotNews;
    KhuyenMaiDetails.querySelector(".NewItem").innerHTML = KMNewItem;
    KhuyenMaiDetails.querySelector(".remaining").innerHTML =
      KMremaining.join().replace(/,/g, "");
  })
  .catch((err) => {
    console.log("URLDataKhuyenMai:" + err);
  });
var ShowNews = true;
var btnNewstext = "Xem Thêm";
const btnNews = document.querySelector(".btnNews");
const NewDetails = document.querySelector(".NewDetails");
btnNews.innerHTML = btnNewstext;
btnNews.onclick = () => {
  if (!ShowNews) {
    btnNewstext = "Xem Thêm";
    btnNews.innerHTML = btnNewstext;
    ShowNews = true;
    NewDetails.style.height = "0px";
  } else {
    btnNewstext = "Rút Gọn";
    btnNews.innerHTML = btnNewstext;
    ShowNews = false;
    NewDetails.style.height = "705px";
  }
};
/*=====handleSliderHearder =======*/
const SliderbtnLeft = document.querySelector(".SliderbtnLeft");
const SliderbtnRight = document.querySelector(".SliderbtnRight");
const SliderGroup = document.querySelector(".SliderGroup");
const SliderInput1 = document.querySelector("#SliderInput1");
const SliderInput2 = document.querySelector("#SliderInput2");
const SliderInput3 = document.querySelector("#SliderInput3");
var SliderGroupRotate = 0;
const activeSlider = (x) => {
  if (x == -120 || x == 240) {
    SliderInput2.classList.add("activeSlider");
    SliderInput1.classList.remove("activeSlider");
    SliderInput3.classList.remove("activeSlider");
  } else if (x == -0 || x == 0) {
    SliderInput2.classList.remove("activeSlider");
    SliderInput1.classList.add("activeSlider");
    SliderInput3.classList.remove("activeSlider");
  } else if (x == 120 || x == -240) {
    SliderInput2.classList.remove("activeSlider");
    SliderInput1.classList.remove("activeSlider");
    SliderInput3.classList.add("activeSlider");
  }
};
var setIntervalId = 0;
const AutoSlider = () => {
  setIntervalId = setInterval(() => {
    SliderGroupRotate = SliderGroupRotate - 120;
    SliderGroup.style.transform = `rotateY(${SliderGroupRotate}deg)`;
    activeSlider(SliderGroupRotate % 360);
  }, 8000);
};
AutoSlider();
SliderbtnLeft.onclick = () => {
  clearInterval(setIntervalId);
  SliderGroupRotate = SliderGroupRotate + 120;
  SliderGroup.style.transform = `rotateY(${SliderGroupRotate}deg)`;
  activeSlider(SliderGroupRotate % 360);
  AutoSlider();
};
SliderbtnRight.onclick = () => {
  clearInterval(setIntervalId);
  SliderGroupRotate = SliderGroupRotate - 120;
  SliderGroup.style.transform = `rotateY(${SliderGroupRotate}deg)`;
  activeSlider(SliderGroupRotate % 360);
  AutoSlider();
};
const SliderItem1 = document.querySelector(".SliderItem1");
const SliderItem2 = document.querySelector(".SliderItem2");
const SliderItem3 = document.querySelector(".SliderItem3");
const translateZ = SliderItem1.clientWidth / 2 / Math.tan((60 * Math.PI) / 180);
SliderItem1.style.transform = `translateZ(${translateZ}px)`;
SliderItem2.style.transform = `rotateY(120deg) translateZ(${translateZ}px)`;
SliderItem3.style.transform = `rotateY(240deg) translateZ(${translateZ}px)`;

const VideoHeaderContainer = document.querySelector(".VideoHeaderContainer");
const SliderbtnCenter = document.querySelector(".SliderbtnCenter");
const VideoHeaderClose = document.querySelector(".VideoHeaderClose");
var Urlvideohearder = "";
const handleShowVideoHeader = (Urlvideohearder) => {
  const VideoHeaderGroup = `<div class="VideoHeaderGroup">
                            <div class="VideoHeaderClose"></div>
                            <iframe class="videoIframe" src="https://www.youtube.com/embed/${Urlvideohearder}?autoplay=1&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0" "
                              title="YouTube video player" frameborder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowfullscreen>
                            </iframe>
                          </div>`;
  return VideoHeaderGroup;
};
SliderbtnCenter.onclick = () => {
  if (SliderGroupRotate % 360 == 0 || SliderGroupRotate % 360 == -0) {
    Urlvideohearder = "kBY2k3G6LsM";
    VideoHeaderContainer.innerHTML = handleShowVideoHeader(Urlvideohearder);
  } else if (
    SliderGroupRotate % 360 == -120 ||
    SliderGroupRotate % 360 == 240
  ) {
    Urlvideohearder = "uqJ9u7GSaYM";
    VideoHeaderContainer.innerHTML = handleShowVideoHeader(Urlvideohearder);
  } else if (
    SliderGroupRotate % 360 == 120 ||
    SliderGroupRotate % 360 == -240
  ) {
    Urlvideohearder = "JNZv1SgHv68";
    VideoHeaderContainer.innerHTML = handleShowVideoHeader(Urlvideohearder);
  }
  VideoHeaderContainer.style.right = "0";
  VideoHeaderContainer.style.height = "100%";
  clearInterval(setIntervalId);
};
VideoHeaderContainer.onclick = () => {
  VideoHeaderContainer.style.right = "-100%";
  VideoHeaderContainer.style.height = "0%";
  VideoHeaderContainer.innerHTML = "";
  AutoSlider();
};

/*====Product */
var dataUrl = {};
var urlProduct = "";
const ShowTraiLerProducts = document.querySelector(".ShowTraiLerProduct");
const ShowHandlesTrailer = (url) => {
  var ShowTrailerProduct = `<div class="ProductTrailer">
                              <div class="ProductTrailerGroup">
                              <div class="ProductTrailerClose"></div>
                              <iframe class="videoIframe" src="https://www.youtube.com/embed/${url}?autoplay=1&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0" "
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                              </iframe>
                              </div>
                            </div>`;
  ShowTraiLerProducts.innerHTML = ShowTrailerProduct;
};

const handleShowTrailer = (id) => {
  ShowTraiLerProducts.style.top = "0%";
  urlProduct = dataUrl[id];
  ShowHandlesTrailer(urlProduct);
};
ShowTraiLerProducts.onclick = () => {
  ShowTraiLerProducts.style.top = "-100%";
  urlProduct = "";
  ShowHandlesTrailer(urlProduct);
};
const handleClickBtn = (id) => {
  var Btnlist = Array.from(document.querySelectorAll(".btnProduct"));
  Btnlist.map((btn) => {
    if (btn.id === `c${id}`) {
      let rotatefloor = id * (360 / leng);
      btn.style.backgroundColor = "#fb4226";
      Floor.style.transform = `rotateY(-${rotatefloor}deg)`;
    } else {
      btn.style.backgroundColor = "#757575";
    }
  });
};
var leng = 0;
const URLdanhSachPhim =
  "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09";
const Floor = document.querySelector(".Floor");
const ShowProductList = (res) => {
  var limit = 8;
  const bodyWidth = document.getElementsByTagName('body')[0].clientWidth
  if (bodyWidth <= 768 && bodyWidth >=570) {
    limit = 6;
  }else if (bodyWidth<570){
    limit = 4
  }
  const ArrayNumbers = Math.ceil(res.length / limit);
  var ArrayPages = [];
  for (let i = 0; i < ArrayNumbers; i++) {
    const Page = res.slice(limit * i, limit * (i + 1));
    ArrayPages.push(Page);
  }
  
  const componentShowProducts = () => {
    const OnClick = (id, url) => {
      let i = url.lastIndexOf("watch?v=");
      let k = "";
      if (i !== -1) {
        k = url.slice(i + 8);
        dataUrl[id] = k;
      } else {
        k = url.slice(17);
        dataUrl[id] = k;
      }
    };
    // tránh vỡ layout khi data tăng
    const RotateYProductTab = 360 / ArrayPages.length;
    const translateZProductTab = (Floor.clientWidth /2 / Math.tan(((RotateYProductTab / 2) * Math.PI) / 180))+1;
    //======================================
    const productList = ArrayPages.map((page, i) => {
      const ProductItem = page.map((item) => {
        return `<div class="product">
                <div class="Picture" id='${item.maPhim}' 
                  ${OnClick(item.maPhim, item.trailer)}
                  onclick=handleShowTrailer(${item.maPhim})>
                  <img
                    src="${item.hinhAnh}"
                    alt=""
                  />
                  <div class="cushion">
                    <div class="player">
                      <img src="./static/img/play.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="detail">
                  <h4 class="detailTitle">
                    <span>C18</span>
                    ${item.biDanh}
                  </h4>
                  <p class="detailText">
                    ${item.moTa}
                  </p>
                  <div class="buy"><p>Mua Vé</p></div>
                </div>
              </div>`;
      });

      return `<div class="productList" 
      style="transform: rotateY(${
        i * RotateYProductTab
      }deg) translateZ(${translateZProductTab}px)">
                ${ProductItem}
              </div>`;
    });
    return productList;
  };
  Floor.innerHTML = componentShowProducts().join().replace(/,/g, "");
  const sliderProduct = document.querySelector(".sliderProduct");
  const BtnArr = [];
  for (let h = 0; h < ArrayPages.length; h++) {
    var BtnItem = `<button class="btnProduct" id = 'c${h}' type="button" onclick="handleClickBtn(${h})"></button>`;
    BtnArr.push(BtnItem);
  }
  sliderProduct.innerHTML = BtnArr.join().replace(/,/g, "");
  leng = ArrayPages.length;
};
const productComponent=()=>{
  fetch(URLdanhSachPhim)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    ShowProductList(res);
  });
}
productComponent()
window.onresize = ()=>{
  productComponent()
}
NewDetailTab();
ShowDetails(cinemaId);
