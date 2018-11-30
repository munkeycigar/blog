---
templateKey: blog-post
title: Setting up SFTP on AWS EC2
date: 2018-11-21T15:46:00.725Z
author: Leo Reyes
tags:
  - How-To
  - AWS
  - SFTP
---
I've recently setup a new instance of [AWS EC2](https://aws.amazon.com/ec2/)(Ubuntu 18.04) to host WordPress sites using [Docker](https://www.docker.com/). To make transferring of files a lot easier from my development environment to my ec2 instance, I set up an SFTP server. 

If anyone else is trying to do something similar, here is how you can do the same.

1. Install vsftpd
   ```
   sudo apt-get install vsftpd
   ```
2. Update the vsftpd.conf file (/etc/vsftpd.conf)
   1. I created a copy of the original file and just created a new one
      ```
      mv /etc/vsftpd.conf /etc/vsftpd.conf_orig
      touch /etc/vsftpd.conf
      ```
      The new one should have the following config
      ```
      listen=NO
      listen_ipv6=YES
      anonymous_enable=NO
      local_enable=YES
      write_enable=YES
      local_unask=022
      dimessage_enable=YES
      use_localtime=YES
      xferlog_enable=YES
      connect_from_port_20=YES
      chroot_local_user=YES
      secure_chroot_dir=/var/run/vsftpd/empty
      pam_service_name=vsftpd
      rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
      rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
      ssl_enable=YES
      pasv_enable=YES
      pasv_min_port=12000
      pasv_max_port-12048
      allow_writeable_chroot=YES
      ```
      Restart the vsftpd server once you save the config file.
      ```
      sudo service vsftpd restart
      ```
3. Open up ports
   1. Go to the EC2 Management Console
   2. Go to **Security Groups** under the left navigation
   3. Select the group that is assigned to the EC2 instance or create a new one and assign it to the instance
   4. Add a rule to allow ports 21 and 12000-12048 (or whatever port range you used in the vsftpd.conf, pasv_min_port - pasv_max_port)
4. Create group and add user. This is the user that you will use to access sftp.
   ```
   sudo addgroup sftp
   sudo useradd -m sftpuser -g sftp
   ```
5. Install SSH
   ```
   sudo apt-get install ssh
   ```
6. Update the SSH config (/etc/ssh/sshd_config) with the following
   ```
   Match group sftp
   ChrootDirectory /home
   X11Forwarding no
   AllowTcpForwarding no
   ForceCommand internal-sftp
   PasswordAuthentication yes
   ```
7. Restart ssh
   ```
   sudo service ssh restart
   ```

This is a pretty simple setup, hopefully this helps you get started.
