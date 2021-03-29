const currency = '$';

const plans = [
  {
    id: 'free_plan',
    private_credits: 10000,
    public_credits: 0,
    users: 0,
    price: 0,
    name: 'Free',
    currency,
    is_enabled: true,
    is_default: false,
    is_annual: false,
  },
  {
    id: 'one_concurrent',
    private_credits: 0,
    public_credits: 0,
    users: 0,
    price: 6900,
    name: '1 concurrent job',
    currency,
    is_enabled: true,
    is_default: true,
    is_annual: false,
  },
  {
    id: 'two_concurrent',
    private_credits: 0,
    public_credits: 0,
    users: 0,
    price: 75900,
    name: '2 concurrent jobs',
    currency,
    is_enabled: true,
    is_default: false,
    is_annual: false,
  },
  {
    id: 'five_concurrent',
    private_credits: 0,
    public_credits: 0,
    users: 0,
    price: 75900,
    name: '5 concurrent jobs',
    currency,
    is_enabled: true,
    is_default: false,
    is_annual: false,
  },
  {
    id: 'one_concurrent_annual',
    private_credits: 0,
    public_credits: 0,
    users: 0,
    price: 75900,
    name: '1 concurrent annual job',
    currency,
    is_enabled: true,
    is_default: false,
    is_annual: true,
  },
  {
    id: 'two_concurrent_annual',
    private_credits: 0,
    public_credits: 0,
    users: 0,
    price: 75900,
    name: '2 concurrent annual jobs',
    currency,
    is_enabled: true,
    is_default: false,
    is_annual: true,
  },
  {
    id: 'five_concurrent_annual',
    private_credits: 0,
    public_credits: 0,
    users: 0,
    price: 'Request a Quote',
    name: 'Custom',
    currency,
    is_enabled: true,
    is_default: false,
    is_annual: true,
  },
];

module.exports = { plans };
