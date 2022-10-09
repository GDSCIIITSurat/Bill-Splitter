
import React from 'react'
import style from "../styles/ExpensePage.module.css"

function ExpensePage() {
  const group_data = {
    name: "Group1",
    date: "10/8/2022",
    status: "PAID",
    note: "test note",


  }

  const expence = [
    {
      name: "jitanshu",
      pay: "$100"
    },
    {
      name: "Ankit",
      pay: "$100"
    },
    {
      name: "Utsav",
      pay: "$100"
    },
    {
      name: "jitanshu",
      pay: "$100"
    },
    {
      name: "Ankit",
      pay: "$100"
    },
    {
      name: "Utsav",
      pay: "$100"
    },
  ]

  const total = "$300"
  const exp_detail = [
    {
      item: "item_1",
      amount: "$100",
    },
    {
      item: "item_2",
      amount: "$100",
    },
    {
      item: "item_3",
      amount: "$100",
    },

  ]


  return (
    <>
      <h1 className={style.grp_head}>{group_data.name}</h1>
      <h3 className={style.grp_date}>date-{group_data.date}</h3>
      <div className={style.status_head}>
        <h2 className={style.status}>status:{group_data.status}</h2>
        <img src="check.png" alt="" className={style.check} />
      </div>

      <div className={style.main_cont_box}>
        <div className={style.left_box}>


          <h1 className={style.detail_box}>Summary</h1>
          <hr />
          <div className={style.user_data_box}>
            <h3 className={style.info_data}>Payment Group:</h3>
            <div className={style.info_data_box}>
              <h3 className={style.user_info_data} >{group_data.name}</h3>
            </div>
          </div>
          <div className={style.user_data_box}>
            <h3 className={style.info_data}>Payment Date:</h3>
            <div className={style.info_data_box}>
              <h3 className={style.user_info_data} >{group_data.date}</h3>
            </div>
          </div>
          <div className={style.user_data_box}>
            <h3 className={style.info_data}>Payment Note:</h3>
            <div className={style.info_data_box}>
              <h3 className={style.user_info_data} >{group_data.note}</h3>
            </div>
          </div>
          <div className={style.user_data_box}>
            <h3 className={style.info_data}>Status:</h3>
            <div className={style.info_data_box}>
              <h3 className={style.user_info_data} >{group_data.status}</h3>
            </div>
          </div>

          <div className={style.contributer}>


            <h1 className={style.detail_box}>
              Contributer</h1>
            <hr />
            <div className={style.contr_detail_box}>
              {
                expence.map((ele) => {
                  return (<div className={style.contributer_box}>
                    <img src="dummy.jpg" alt="" className={style.contr_img} />
                    <h1 className={style.contributer_name}>{ele.name}</h1>
                    <h2 className={style.contributer_pay}>{ele.pay}</h2>
                  </div>)
                })
              }
            </div>

          </div>

        </div>

        <div className={style.right_box}>
          <h1 className={style.detail_box}>
            Expense Breakdown</h1>
          <hr />
          {
            exp_detail.map((ele) => {
              return (<div className={style.user_data_box}>
                <h3 className={style.info_data}>{ele.item}</h3>
                <div className={style.info_data_box}>
                  <h3 className={style.user_info_data} >{ele.amount}</h3>
                </div>
              </div>)
            })
          }
          <hr />
          <div className={style.user_data_box}>
            <h3 className={style.info_data}>Total</h3>
            <div className={style.info_data_box}>
              <h3 className={style.user_info_data} >{total}</h3>
            </div>
          </div>


        </div>
      </div>


    </>
  )
}

export default ExpensePage