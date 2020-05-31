import Mock from 'mockjs'
import data from './data'
import address from './address'
import searchData from './searchData'
import searchlily from './searchlily'
//  返回goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
//  返回info的接口
Mock.mock('/info', {code: 0, data: data.info})
Mock.mock('/position/23.12115,113.33149', {code: 0, data: address})
Mock.mock('/search_shops?keyword=test&geohash=40.10038,116.36867', {code: 0, data: searchData})
Mock.mock('/search_shops?geohash=23.12115,113.33149&keyword=test', {code: 0, data: searchData})
Mock.mock('/search_shops?geohash=23.12115,113.33149&keyword=lily', {code: 0, data: searchlily})
Mock.mock('/search_shops?geohash=23.12115,113.33149&keyword=123', {code: 0, data: []})
