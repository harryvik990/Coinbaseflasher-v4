
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { address } = req.body;
    const fakeBalance = 1000 + Math.floor(Math.random() * 9000);
    res.status(200).json({ address, balance: fakeBalance });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
