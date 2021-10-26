# S : single responsibility
- 1 Class/ Function chỉ đảm 1 nhiệm 1 chức năng

# O: open/closed
- Dễ dàng mở rộng, khó khăn khi chỉnh sửa 

# L: Liskov 
- Đảm bảo tính ổn định

# I: Interface segregation 
- Chia interface ra càng nhỏ càng tốt

# D: Dependency
- (Modules, Class, Funcition) depend on abstraction level.
- Giao tiếp với nhau thông qua interface( abstract ) thay vì class hoăc instance?

Edible (Inteface)
Human -> eat(food:Edible)
typescript => superset 