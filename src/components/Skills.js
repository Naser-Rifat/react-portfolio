import React, { Component, useEffect, useState } from "react";
import $ from "jquery"
import Skill from "./Skill";

const Skills = () => {

  // constructor(props) {
  //   super();
  //   this.state = {
  //     foo: "bar",
  //     resumeData: {},
  //     sharedData: {},
  //   };
  // }
  // componentDidMount() {
  //   this.loadSharedData();

  // }

  // loadSharedData() {
  //   $.ajax({
  //     url: `portfolio_shared_data.json`,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ sharedData: data });
  //       document.title = `${this.state.sharedData.basic_info.name}`;
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       alert(err);
  //     },
  //   });
  // }

  const [datas, setDatas] = useState([])


  useEffect(() => {

    fetch('./portfolio_shared_data.json')
      .then(res => res.json())
      .then(data => setDatas(data.skills.icons))
  }, [])



  return (
    <div className="my-40" style={{ backgroundColor: "F7F7F7" }} >
      <h3 className="text-5xl text-black p-16">SKILLS</h3>
      <div data-aos="zoom-in" className=" pb-40 pt-20">

        {
          datas.map(data =>

            <Skill
              skills={data}

            />)
        }
      </div>
    </div>

  )


}

export default Skills;
