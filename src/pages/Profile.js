import React from 'react'
import style from "../styles/profile.module.css"

function Profile() {
  const friends_data = [
    "Jitanshu",
    "Ankit",
    "Utsav",
  ]

  const user_data = {
    first_name: "Jitanshu",
    Last_name: "Raut",
    Country: "India",
    Email: "abc@gmail.com"
  }

  const payment_data = [
    {
      group: "example1",
      payment: "$ 10",
    },
    {
      group: "example2",
      payment: "$ 10",
    },
    {
      group: "example3",
      payment: "$ 10",
    },
  ]
  return (
    <>
      <div className={style.profile}>

        <div className={style.cont_1}>
          <div className={style.box_right}>
            <img src="dummy.jpg" alt="Profile Pic" className={style.photo} />
            <h1 className={style.user_name}>{user_data.first_name}</h1>

            <hr className={style.hr} />
            <h1 className={style.friends_head}>Friends</h1>

            {
              friends_data.map((ele) => {
                return (<div className={style.data_box}>
                  <div className={style.img}>
                    <img src="dummy.jpg" alt="Profile Pic" className={style.profile_img} />
                  </div>
                  <div className={style.name}>
                    <h1 className={style.box_name}>{ele}</h1>
                  </div>

                </div>)
              })
            }


          </div>

          <div className={style.box_left}>
            <div >
              <h1 className={style.personal_head}>Personal Information</h1>

              <div className={style.user_data_box}>
                <h3 className={style.info_data}>First Name:</h3>
                <div className={style.info_data_box}>
                  <h3 className={style.user_info_data} >{user_data.first_name}</h3>
                </div>
              </div>
              <div className={style.user_data_box}>
                <h3 className={style.info_data}>Last Name:</h3>
                <div className={style.info_data_box}>
                  <h3 className={style.user_info_data} >{user_data.Last_name}</h3>
                </div>
              </div>
              <div className={style.user_data_box}>
                <h3 className={style.info_data}>Country:</h3>
                <div className={style.info_data_box}>
                  <h3 className={style.user_info_data} >{user_data.Country}</h3>
                </div>
              </div>
              <div className={style.user_data_box}>
                <h3 className={style.info_data}>Email:</h3>
                <div className={style.info_data_box}>
                  <h3 className={style.user_info_data} >{user_data.Email}</h3>
                </div>
              </div>
            </div>
            <div>
              <hr className={style.hr} />
              <h1 className={style.recent_pay_head}>Recent payment info</h1>

            </div>
            {
              payment_data.map((ele) => {
                return (<div className={style.data_box}>
                  <div className={style.img}>
                    <img src="check.jpg" alt="Profile Pic" className={style.pay_img} />
                  </div>
                  <div className={style.name}>
                    <h1 className={style.pay_data}>Group: {ele.group} </h1>
                    <h1 className={style.pay_data}>Payment: {ele.payment}  </h1>

                  </div>

                </div>)
              })
            }


          </div>
        </div>
      </div>
    </>
  )
}

export default Profile