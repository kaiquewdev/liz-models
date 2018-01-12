

```python
import requests
```


```python
distance = requests.post('https://liz-app-fqzmytzbae.now.sh/mtravels',{"distance":100})
```


```python
distance
```




    <Response [201]>




```python
distance.json()
```




    {'distance': '100', 'id': 1, 'price': 204.10183715820312, 'qty': 1}


