import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { bookingList } from '../../../store/actions/booking.actions';
import getBookingReducer from '../../../store/reducers/booking.reducer';


function Booking () {
    let [amount, setAmount] = useState(0);
    const {maLichChieu} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bookingList(maLichChieu));
    }, [])
    const {listChair, user} = useSelector((state) => state.booking);
    const {loading} = useSelector((state) => state.loading);
    
    
    const setPickingColor = (item) => {
        if (item.daDat) {
            return "gheDaDate";
        } else {
            if (item.dangChon) {
                return "gheDangChon";
            }
        }
    }

    const handleAmount = (item) => {
        if (item.dangChon) {
            setAmount(amount+1);
        } else {
            setAmount(amount-1);
        }
    }

    const renderChairLeft = () => {
        if (listChair.danhSachGhe) {
            let sliceList = listChair.danhSachGhe.slice(0, 40);
            // console.log("slicedList: ", sliceList);
            return sliceList.map((item, index) => {
                return (
                <button className={setPickingColor(item)} onClick={() => {
                    dispatch({
                        type: "DANG_CHON",
                        payload: item,
                    });
                    handleAmount(item);
                }} disabled={item.daDat}>{item.tenGhe}</button>
            )
            })
        }
    }

    const renderChairMid = () => {
        if (listChair.danhSachGhe) {
            let sliceList = listChair.danhSachGhe.slice(40, 120);

            return sliceList.map((item, index) => {
                return (<button className={setPickingColor(item)} onClick={() => {
                    dispatch({
                        type: "DANG_CHON",
                        payload: item,
                    });
                    handleAmount(item);
                }} disabled={item.daDat}>{item.tenGhe}</button>)
            })
        }
    }

    const renderChairRight = () => {
        if (listChair.danhSachGhe) {
            let sliceList = listChair.danhSachGhe.slice(120, 160);
            return sliceList.map((item, index) => {
                return (<button className={setPickingColor(item)} onClick={() => {
                    dispatch({
                        type: "DANG_CHON",
                        payload: item,
                    });
                    handleAmount(item);
                }} disabled={item.daDat}>{item.tenGhe}</button>)
            })
        }
    }

    const renderMovieName = () => {
        if (listChair.danhSachGhe) {
            return listChair.thongTinPhim.tenPhim;
        }
    }
    if (loading == true && listChair.length == 0) {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    } else {
        return (
            <div className="booking">
                <div class="bookContainer">
                    <div className="bookingContent">
                        <span>ten phim: {renderMovieName()}</span>
                    </div>
                    <div className="listChairContainer">
                        <div className="screen">SCREEN</div>
                        <div className="listChair">
                            <div className="listLeft">
                                {renderChairLeft()}
                            </div>
                            <div className="listMid">
                                {renderChairMid()}
                            </div>
                            <div className="listRight">
                                {renderChairRight()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="totalAmount">
                    <h3>Thanh Toán</h3>
                    <div className="count">Số lượng ghế: <span>{amount}</span></div>
                    <div className="price">Đơn giá: <span>75.000VND</span></div>
                    <div className="total">Tổng tiền: <span>{`${amount * 75000} đồng`}</span></div>
                    <button>Đặt vé</button>
                </div>
            </div>
        )
    }
}

export default Booking;