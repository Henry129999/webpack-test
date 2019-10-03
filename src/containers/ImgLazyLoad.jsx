import React, { Component } from "react";

export default class ImgLazyLoad extends Component{
  componentDidMount() {
    let img = document.getElementsByTagName('img');
    window.onscroll = () => {
      this.onLazyLoad(img);
    };
  }

  onLazyLoad = (img) => {
    let seeHeight = document.documentElement.clientHeight; //可见区域高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
    let n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

    for (let i = n; i < img.length; i++) {
      if (img[i].offsetTop < seeHeight + scrollTop) {
        if (img[i].getAttribute("src") === "../../images/tags.png") {
          img[i].src = img[i].getAttribute("data-src");
        }
        n = i + 1;
      }
    }
  };

  render() {
    return(
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src="../../images/tags.png" data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570101837932&di=b65178c0ec47d1f760011988fd78cd47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F30%2Fw1080h1350%2F20180826%2Fcb89-hifuvph0451800.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1589737666,2266409315&fm=26&gp=0.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="http://img.tupianzj.com/uploads/190422/30-1Z4221J116440.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="http://img.tupianzj.com/uploads/190422/30-1Z4221J116440.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="http://img.tupianzj.com/uploads/allimg/160808/9-160PR142290-L.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570101837932&di=b65178c0ec47d1f760011988fd78cd47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F30%2Fw1080h1350%2F20180826%2Fcb89-hifuvph0451800.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570101837932&di=b65178c0ec47d1f760011988fd78cd47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F30%2Fw1080h1350%2F20180826%2Fcb89-hifuvph0451800.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570101837932&di=b65178c0ec47d1f760011988fd78cd47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F30%2Fw1080h1350%2F20180826%2Fcb89-hifuvph0451800.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570101837932&di=b65178c0ec47d1f760011988fd78cd47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F30%2Fw1080h1350%2F20180826%2Fcb89-hifuvph0451800.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570101837932&di=b65178c0ec47d1f760011988fd78cd47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F30%2Fw1080h1350%2F20180826%2Fcb89-hifuvph0451800.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570101837932&di=b65178c0ec47d1f760011988fd78cd47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F30%2Fw1080h1350%2F20180826%2Fcb89-hifuvph0451800.jpg" alt=""/>
        <img src="../../images/tags.png" data-src="http://img.tupianzj.com/uploads/190401/34-1Z401164616245.jpg" alt=""/>
      </div>
    );
  }
}