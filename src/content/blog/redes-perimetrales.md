---
title: 'Seguridad en una red: Redes perimetrales'
description: '¿Qué es una red perimetral?'
pubDate: 'Nov 23 2024'
heroImage: '/redes-perimetrales.webp'
---

La seguridad perimetral es un método de defensa de las redes informáticas, que consiste en instalar equipos de comunicaciones en los que se establecen políticas de seguridad necesarias para su óptimo funcionamiento. Estos equipos se colocan entre la red externa y la red interna, permitiendo o denegando el acceso a los usuarios internos y externos a los diferentes servicios de la red.  Como tal, a menudo sirve como la primera línea de defensa de una red contra muchos peligros que pueden dañar los sistemas conectados. 

Entre los principales desafíos de la seguridad perimetral están: 
 
- La confiabilidad de la detección.  
- El comportamiento de los dispositivos en condiciones climáticas adversas.  
- La adecuación a las características físicas del perímetro.  
- La transmisión de señales.  
- La tasa de falsas alarmas.  

Para la protección perimetral existen distintos mecanismos, como:  

## Cortafuegos

Los cortafuegos restringen el tráfico de Internet dentro, fuera o dentro de una red privada. Este software o unidad de hardware-software dedicada funciona bloqueando o permitiendo de forma selectiva paquetes de datos. Su objetivo general es evitar que cualquier persona, dentro o fuera de una red privada, participe en actividades web no autorizadas y ayudar a prevenir actividades maliciosas.

![Cortafuegos](/cortafuegos.webp)

Los cortafuegos pueden compararse con fronteras cerradas o puertas de enlace que regulan el flujo de actividad web permitida y bloqueada dentro de una red privada. El término tiene su origen en las barreras físicas diseñadas para contener la propagación del fuego. De manera similar, los firewalls en la seguridad de red gestionan el tráfico web, actuando como una barrera para limitar la propagación de amenazas en línea.  

Se clasifican según la capa del protocolo de comunicaciones en la que actúan:  
- **Cortafuegos de nivel de red:**  
  Controlan las comunicaciones entre redes y aplican políticas de seguridad en tiempo real. Incluyen routers con capacidad de filtrado de paquetes.  
- **Cortafuegos de nivel de aplicación:**  
  Controlan protocolos y aplicaciones específicas como mensajería instantánea, aplicaciones web y redes P2P. Incluyen cortafuegos-proxy, que filtran protocolos de nivel de aplicación como HTTP, FTP y SMTP.  

También pueden clasificarse según su ámbito de protección:  
- **Cortafuegos personales:**  
  Integrados en sistemas operativos, proporcionan protección básica al gestionar el tráfico entrante y saliente en dispositivos individuales.  
- **Cortafuegos corporativos:**  
  Diseñados para proteger redes organizacionales, manejan tráfico a gran escala con alta potencia y capacidad de procesamiento.

## Redes virtuales privadas (VPN)

Una **Red Privada Virtual (VPN)** es una conexión encriptada que permite a un dispositivo conectarse de manera segura a una red a través de Internet. Este cifrado garantiza la transmisión segura de datos confidenciales y previene el acceso no autorizado al tráfico, permitiendo a los usuarios trabajar de forma remota.  

El tráfico en una VPN viaja a través de un túnel encriptado, asegurando la privacidad y seguridad de los datos. Esto permite a empleados remotos acceder de manera segura a los recursos de la red corporativa.  

![¿Cómo funciona una vpn?](/como-funciona-una-vpn.png)

## Sistema de detección y prevención de intrusiones (IPS/IDS)

Estas herramientas identifican ataques, registran información relevante, bloquean amenazas y notifican a los administradores. Además, ayudan a reforzar políticas de seguridad y disuadir violaciones.  

- **IDS (Sistema de Detección de Intrusiones):**  
  Monitorea eventos en la red para identificar posibles incidentes o amenazas de seguridad.

![¿Qué es un IDS?](/que-es-un-ids.webp)

- **IPS (Sistema de Prevención de Intrusiones):**  
  Combina la detección de intrusiones con la capacidad de detener incidentes detectados.  

![Diagrama del IPS](/diagrama-ips.png)

## Controles de acceso e identidad

El control de acceso asegura que los usuarios sean quienes dicen ser y tengan acceso solo a los datos autorizados. Este mecanismo se basa en:  
- **Autenticación:** Verifica la identidad del usuario.  
- **Autorización:** Determina los permisos del usuario para acceder a recursos específicos.  

Ambos componentes son esenciales para garantizar la seguridad en el entorno actual, especialmente con empleados trabajando de forma remota.

![Funciones claves del servidor de IAM](/funciones-clave-iam.jpeg)

## Honeypots

Un honeypot es un sistema de seguridad que actúa como señuelo para atraer a usuarios malintencionados, como hackers o spammers. Este sistema permite recopilar información valiosa sobre los atacantes, como direcciones IP y comportamientos, para mejorar la seguridad y prevenir ataques futuros.  

![¿Cómo funcionan los honeypots?](/como-funcionan-los-honeypots.avif)

## Sistemas anti-DDoS

- **Software anti-DDoS:**  
  Analiza y filtra tráfico malicioso, pero ofrece protección parcial y puede generar falsos positivos.  
- **Hardware anti-DDoS:**  
  Actúa como barrera física contra ciertos tipos de ataques, aunque puede no ser eficaz para ataques basados en volumen o DNS.  

![AntiDDoS](/anti-ddos.webp)

## Gestión de amenazas avanzadas (ATM)

Los sistemas ATM emplean análisis de comportamiento y aprendizaje automático para identificar y responder a amenazas cibernéticas sofisticadas. Mediante la detección de patrones anómalos, ofrecen una protección más robusta frente a ciberataques emergentes.  

## Referencias bibliográficas

- ATICO34. (S/F). Seguridad perimetral informática. Qué es y objetivos. Grupo ATICO34. Recuperado de https://protecciondatos-lopd.com/empresas/seguridad-perimetral-informatica/

- Hubler. (S/F). ¿Qués es la seguridad perimetral informática? Hubler. Recuperado de https://hubler.es/que-es-la-seguridad-perimetral-informatica/

- Powell, P., Smalley, I. (2024). ¿Qué es una red perimetral? IBM. Recuperado de https://www.ibm.com/mx-es/topics/edge-network