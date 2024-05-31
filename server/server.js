//sk_test_51PMRJd00ZNosv7FFbaai3SXH798Esa2gc3OAqYMvVAp0ocg9uxNZ0dMP3vTVpDEQtBD5GmlgkIXtnWYcgkTqP9HO00jrGs0lI0
// Coffee:price_1PMRTt00ZNosv7FF1AbVarl2
//Sunglasses:price_1PMRWj00ZNosv7FFBRcWdZZX
//Camera:price_1PMU9B00ZNosv7FFQu2A0ZIc

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51PMRJd00ZNosv7FFbaai3SXH798Esa2gc3OAqYMvVAp0ocg9uxNZ0dMP3vTVpDEQtBD5GmlgkIXtnWYcgkTqP9HO00jrGs0lI0'
);

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
