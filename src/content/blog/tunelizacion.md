---
title: 'Establecimiento de un enlace seguro de red: Tunelización (Tunneling)'
description: '¿Qué es el tunneling?'
pubDate: 'Nov 24 2024'
heroImage: '/tunelizacion.jpg'
---

La tunelización funciona mediante el encapsulado de paquetes, es decir, envolviendo paquetes de datos dentro de otros paquetes. Los paquetes son pequeñas unidades de datos que, al llegar a su destino, pueden volver a ensamblarse para formar un archivo más grande.

El protocolo de tunelización es una tecnología que permite la transmisión de datos entre redes utilizando un proceso de encapsulación. Este método consiste en empaquetar los datos originales dentro de otro formato de datos, de manera que puedan ser enviados a través de una red que, en condiciones normales, no admitiría directamente esos datos o ese protocolo. Este proceso se utiliza comúnmente en redes privadas virtuales (VPN), donde permite crear conexiones seguras y eficientes entre redes. 

Además, la tunelización facilita el uso de protocolos de red que no son directamente compatibles entre sí y, en algunos casos, puede permitir a los usuarios eludir restricciones de firewalls, ofreciendo mayor flexibilidad y seguridad en las comunicaciones. La tunelización es una herramienta clave en el diseño de redes modernas, especialmente en contextos donde la seguridad, la interoperabilidad y la flexibilidad son esenciales.

## Túnel VPN

Una VPN (Red Privada Virtual) es una conexión segura y encriptada que permite transmitir datos a través de una red pública compartida. La tunelización es el proceso mediante el cual los paquetes de datos de la VPN llegan a su destino, normalmente una red privada, a través de un "túnel" encriptado.

![Tunel VPN](/tunel-vpn.png)

Muchas VPN utilizan el conjunto de protocolos IPsec, que opera directamente sobre IP en la capa de red. En un túnel IPsec, todo el tráfico de red está completamente encriptado, pero se desencripta una vez que llega a su destino, ya sea una red privada o el dispositivo del usuario. IPsec también incluye un "modo de transporte", que no crea un túnel completo, sino que cifra solo los datos del paquete sin encapsular el paquete completo.

Otro protocolo comúnmente utilizado en VPN es **Transport Layer Security (TLS)**, que opera en las capas 6 o 7 del modelo OSI, dependiendo de la interpretación. Aunque a veces se le llama **SSL (Secure Sockets Layer)**, es importante destacar que SSL es un protocolo más antiguo y ya no se utiliza, siendo TLS la versión más moderna y segura.

## Tunelización dividida

Normalmente, cuando un usuario se conecta a una VPN, todo su tráfico de red se enruta a través del túnel VPN, lo que garantiza que todos los datos estén protegidos y encriptados. Sin embargo, la **tunelización dividida (split tunneling)** permite que parte del tráfico se envíe fuera del túnel VPN, mientras que otro tráfico sigue siendo dirigido a través de él.

![Tunelizacion dividida](/tunelizacion-dividida.webp)

En esencia, la tunelización dividida permite que un dispositivo de usuario esté conectado a dos redes simultáneamente: una pública (como Internet) y una privada (como la red corporativa o una red segura a través de la VPN). Esto puede ser útil para acceder a recursos internos de una red privada, al mismo tiempo que se navega libremente por Internet sin que todo el tráfico pase por la VPN, lo que puede mejorar la velocidad de conexión y reducir la carga en la red VPN.

## Tunelización GRE

La **Encapsulación de Enrutamiento Genérico (GRE)** es un protocolo de tunelización que permite encapsular paquetes de un protocolo de red dentro de paquetes de otro protocolo, facilitando la creación de una conexión punto a punto a través de una red. Este protocolo es utilizado para simplificar las conexiones entre redes diferentes, creando un túnel seguro a través de redes públicas como Internet, lo que permite transmitir datos como si estuvieran dentro de una red privada.

Cuando se utiliza GRE, se añaden dos encabezados a cada paquete de datos:

- **Encabezado GRE:**  
  Indica el tipo de protocolo que se utiliza para encapsular los datos dentro del paquete. Este encabezado es necesario para que el túnel GRE pueda interpretar correctamente el paquete encapsulado.  

- **Encabezado IP:**  
  Encapsula la cabecera IP del paquete original, permitiendo que el tráfico pueda ser direccionado correctamente a través de la red pública.

El proceso de encapsulación asegura que solo los enrutadores en cada extremo del túnel GRE puedan interpretar el encabezado IP original, lo que garantiza que el paquete se mantenga intacto mientras viaja a través del túnel, y que la red pública no altere los datos encapsulados.

## Tunelización SSH

El protocolo **Secure Shell (SSH)** es una tecnología utilizada para establecer conexiones encriptadas y seguras entre un cliente y un servidor. Funciona en la capa de aplicación (capa 7) del modelo OSI, lo que significa que proporciona un canal seguro para la transmisión de datos, permitiendo la autenticación del usuario y el cifrado de la comunicación.

![Tunelizacion ssh](/tunelizacion-ssh.png)

Además de permitir la administración remota de sistemas a través de la línea de comandos, SSH también puede ser utilizado para crear túneles seguros, lo que significa que se pueden redirigir conexiones de red a través de un canal cifrado. Esto proporciona una capa adicional de seguridad para transmitir datos sensibles, protegiéndolos de posibles interceptaciones.

Por otro lado, protocolos como IPsec, IP en IP y GRE operan en la capa de red (capa 3) del modelo OSI. Estos protocolos se utilizan principalmente para crear túneles de red que encapsulan y transmiten datos entre redes a través de una red pública, como Internet. A diferencia de SSH, que se centra en la seguridad a nivel de aplicación, estos protocolos están diseñados para proteger los datos a nivel de la red.

Así, aunque SSH es ideal para conexiones seguras de usuarios y gestión remota de servidores, IPsec, IP en IP y GRE son más adecuados para la interconexión segura de redes enteras.

## Referencias bibliográficas

- AcademiaLab. (S/F). Túnel (informática). AcademiaLab. Recuperado de https://academia-lab.com/enciclopedia/tunel-informatica/

- Cloudflare. (S/F). ¿Qué es la tunelización? | Tunelización en redes. Cloudflare. Recuperado de https://www.cloudflare.com/es-es/learning/network-layer/what-is-tunneling/