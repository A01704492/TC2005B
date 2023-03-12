# 1. Funcion que ... no reciba argumentos y no regresa nada. Imprime el mensaje "Hola Mundo"

def queTal():
    print("Hola Mundo") #print para decir hola mundo

queTal()

# 2. Funcion que ... no recibe argumentos y regresa tres números aleatorios entre 10 y 50.

import random #Se importa libreria para generar número aleatorio

def generar_numeros(): #Se genera funcion 
    randNum1 = random.randint(10, 50) #numero random del 10 al 50
    randNum2 = random.randint(10, 50) #numero random del 10 al 50
    randNum3 = random.randint(10, 50) #numero random del 10 al 50
    return randNum1, randNum2, randNum3 #retorno de los 3 numeros anteriores

# 3. Funcion que ... no recibe argumentos. Imprime un menú con dos opciones y regresa la opción elegida por el usuario.

def menu():
    print("Selecciona una opción:")
    print("1. Americano")#opcion
    print("2. Hockey")#opcion
    
    opcion = input("Opción: ") #input del usuario
    
    while opcion not in ['1', '2']: #ciclo while, si no se seleciona 1 o 2, es una opcion invalida
        opcion = input("Opción inválida. Ingresa el número de opción: ")
    
    return opcion

# 4. Funcion que ... recibe tres números y los imprime. No regresa nada.

def imprimir_numeros(num1, num2, num3):
    print("Numeros ingresados:")
    print(num1)
    print(num2)
    print(num3)

# 5. Funcion que ... recibe 5 números y regresa la suma y multiplicación de dichos números.

def sumaMultiplicacion(num1, num2, num3, num4, num5): #definicion de funcion que recibe 5 nums por parte del usuario
    suma = num1 + num2 + num3 + num4 + num5 #suma de nums
    multiplicacion = num1 * num2 * num3 * num4 * num5 #mult de nums
    return suma, multiplicacion #retorno

# 6. Funcion que ... recibe la edad del usuario y regresa el año en que cumplirá 50 años.

def cumplir50anios(edad): #definicion funcion edad 50 que recibe una edad insertada por el usuario
    año_actual = 2023  # Variable de año actual para luego restar
    return año_actual + (50 - edad) 

# 7. Funcion que ... recibe 6 números y regresa su media aritmética y su media geométrica.

def medias(n1, n2, n3, n4, n5, n6): #definicion funcion de medias aritmeticas y geometricas, respectivamente
    aritmetica = (n1 + n2 + n3 + n4 + n5 + n6) / 6 #media aritmetica formula
    geometrica = (n1 * n2 * n3 * n4 * n5 * n6) ** (1/6) #media geometrica formula
    return aritmetica, geometrica

# 8. Funcion que ... recibe los tres lados de un triángulo y regresa su área. (Utiliza la fórmula de Herón)

def area_trianguloHeron(lado1, lado2, lado3): # Definicion funcion triangulo heron
    s = (lado1 + lado2 + lado3) / 2 #Semiperimetro
    area = (s * (s - lado1) * (s - lado2) * (s - lado3)) ** 0.5 #Area con formula de Heron
    return area


# 9. Funcion que ... recibe la base y altura de un triángulo rectángulo y regresa su perimetro.

def perimetro_triangulo_rectangulo(base, altura): #Definicion funcion perimetro TriangRect
    hipotenusa = (base**2 + altura**2)**0.5 #Calculo de hipotenusa con formula
    perimetro = base + altura + hipotenusa  #Calculo de perimetro con formula
    return perimetro

#10. Funcion que ... recibe los coeficientes a, b y c de la ecuación cuadrática y regresa sus soluciones x1 y x2.

def ecuacion_cuadratica(a, b, c): #Definicion funcion ec.cuadratica
    discriminante = b**2 - 4*a*c #Formula discriminante
    
    if discriminante < 0: # Sin soluciones reales si el discriminante es negativo
        return None
    else:
        x1 = (-b + (discriminante)**0.5) / (2*a) #Solucion
        x2 = (-b - (discriminante)**0.5) / (2*a) #Solucion
        return x1, x2