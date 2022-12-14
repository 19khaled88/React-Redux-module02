import React from 'react'
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../Redux/counter/ActionCreator'

// const Counter = ({count,increment, decrement}) => {
const Counter = () => {
  const count = useSelector((state) => state.value)
  const items = useSelector((state) => state.soldItems)
  const asusStock = useSelector((state) => state.asusStock)
  const dellStock = useSelector((state) => state.dellStock)
  const canonStock = useSelector((state) => state.canonStock)
  const asusSold = useSelector((state) => state.asusSold)
  const dellSold = useSelector((state) => state.dellSold)
  const canonSold = useSelector((state) => state.canonSold)

  const dispatch = useDispatch()

  const incrementHandler = (value, name, stock) => {
    dispatch(increment(value, name, stock))
  }
  const decrementHandler = (value, name, stock) => {
    dispatch(decrement(value, name, stock))
  }

  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid place-items-center">
        <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
          Shopping Cart
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
              <div className="text-lg font-semibold">
                <p>Asus Vivobook X515MA ({asusStock})</p>
                <p className="text-gray-400 text-base">Tk 35,500</p>
              </div>
              <div className="text-lg font-semibold">
                <button
                  disabled={asusStock === 0 ? true : false}
                  onClick={() => incrementHandler(35500, 'asus', asusStock)}
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
              <div className="text-lg font-semibold">
                <p>Dell E1916HV 18.5 Inch ({dellStock})</p>
                <p className="text-gray-400 text-base">Tk 9,300</p>
              </div>
              <div className="text-lg font-semibold">
                <button
                  disabled={dellStock === 0 ? true : false}
                  onClick={() => incrementHandler(9300, 'dell', 35)}
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
              <div className="text-lg font-semibold">
                <p>Canon Eos 4000D 18MP ({canonStock})</p>
                <p className="text-gray-400 text-base">Tk 36,500</p>
              </div>
              <div className="text-lg font-semibold">
                <button
                  disabled={canonStock === 0 ? true : false}
                  onClick={() => incrementHandler(36500, 'canon', 72)}
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between border-b-2 mb-2">
              <div className="text-lg py-2">
                <p>Asus Vivobook X515MA</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    disabled={asusStock === 20 ? true : false}
                    onClick={() => decrementHandler(35500, 'asus', asusStock)}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{asusSold}</p>
                  <button
                    disabled={asusStock === 0 ? true : false}
                    onClick={() => incrementHandler(35500, 'asus', asusStock)}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-b-2 mb-2">
              <div className="text-lg py-2">
                <p>Dell E1916HV 18.5 Inch</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    disabled={dellStock === 35 ? true : false}
                    onClick={() => decrementHandler(9300, 'dell', dellStock)}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{dellSold}</p>
                  <button
                    disabled={dellStock === 0 ? true : false}
                    onClick={() => incrementHandler(9300, 'dell', 35)}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-b-2 mb-2">
              <div className="text-lg py-2">
                <p>Canon Eos 4000D 18MP</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    disabled={canonStock === 72 ? true : false}
                    onClick={() => decrementHandler(36500, 'canon', canonStock)}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{canonSold}</p>
                  <button
                    disabled={canonStock === 0 ? true : false}
                    onClick={() => incrementHandler(36500, 'canon', 72)}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Item</p>
                <p className="text-5xl">{items}</p>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Price</p>
                <p className="text-5xl">{count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// const mapStateToProps =(state,ownProps)=>{
//     console.log(ownProps)
//     return {
//         count: state.value,

//     }
// }
// const mapDispatchToProps =(dispatch)=>{

//     return {
//         increment:(value)=> dispatch(increment(value)),
//         decrement:(value)=> dispatch(decrement(value))

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// after calling connect() will be return with higher order function and
// we should pass another componet as parameter of that higher order function

export default Counter
