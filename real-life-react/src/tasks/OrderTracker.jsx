import './OrderTracker.css'

const steps = ['placed', 'preparing', 'on_the_way', 'delivered']
const stepNames = ['Placed', 'Preparing', 'On the way', 'Delivered']

function OrderTracker({ restaurant, status, etaMinutes, driverName }) {
  const currentStep = steps.indexOf(status)

  let message = ''
  if (status === 'placed') message = 'Order received'
  else if (status === 'preparing') message = 'The kitchen is preparing your food'
  else if (status === 'on_the_way') message = `${driverName} is on the way`
  else if (status === 'delivered') message = 'Delivered. Enjoy your meal!'
  else message = 'Order cancelled'

  return (
    <div className="order-tracker">
      <h3>{restaurant}</h3>
      <p>{message}</p>

      {status !== 'cancelled' && (
        <div className="order-tracker__steps">
          {stepNames.map((name, i) => {
            const done = i <= currentStep
            const current = i === currentStep
            const stepClass = `order-tracker__step ${
              done ? 'order-tracker__step--done' : 'order-tracker__step--upcoming'
            } ${current ? 'order-tracker__step--current' : ''}`

            return (
              <div key={name} className={stepClass}>
                {done && '✓ '} {name}
              </div>
            )
          })}
        </div>
      )}

      {status === 'on_the_way' && <p>Arrives in {etaMinutes} min</p>}

      {status === 'delivered' && (
        <div>
          <p>Rate your order</p>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n}>⭐</button>
          ))}
        </div>
      )}

      {status === 'cancelled' && <button>Reorder</button>}
    </div>
  )
}

export default OrderTracker