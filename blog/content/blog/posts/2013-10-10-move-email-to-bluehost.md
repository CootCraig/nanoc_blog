---
title: "Move Email to Bluehost"
created_at: Thu Oct 10 11:42:59 MDT 2013
kind: article
tags: [ 'bluehost','email']
---

### Download the mail from GoDaddy
[getmail mail retriever](http://pyropus.ca/software/getmail/)

getmail is a mail retriever designed to allow you to get your mail from
one or more mail accounts on various mail servers to your local machine
for reading with a minimum of fuss. getmail is designed to be secure,
flexible, reliable, and easy-to-use. getmail is designed to replace
other mail retrievers such as fetchmail.

#### Configuration

Configuration file is
_~/.getmail/getmails_

<pre><code>
[retriever]
type = SimplePOP3Retriever
server = pop.theserver.net
username = me@domain.com
password = strongpassword

[destination]
type = Maildir
path = ~/.getmail/maildir/
</code></pre>

It was necessary to move the emails from the saved folder to the inbox,
run getmail to grab them
and then move them back to the saved folder.

### Upload to Bluehost
Perhaps use software like this,
[imap-upload](http://imap-upload.sourceforge.net/)

[Lifehacker article on importing to gmail with imap](http://lifehacker.com/332624/import-messages-into-gmail-via-imap)

Apparently Thunderbird can drag and drop to an imap server.

#### Maildir Directory Structure

Dovecot uses Maildir++ directory layout for organizing mailbox
directories. This means that all the folders are directly inside ~/Maildir
directory:

~/Maildir/new, ~/Maildir/cur and ~/Maildir/tmp directories contain
the messages for INBOX. The tmp directory is used during delivery,
new messages arrive in new and read shall be moved to cur by the clients.

~/Maildir/.folder/ is a mailbox folder

~/Maildir/.folder.subfolder/ is a subfolder of a folder
(ie. "folder/subfolder")

Most importantly this means that if your maildir folders exist in
eg. ~/Maildir/folder and ~/Maildir/folder/subfolder, Dovecot won't see
them unless you rename them to Maildir++ layout. v1.1 supports them by
adding :LAYOUT=fs to mail_location.

    .
<pre><code>
~/godaddy_export/cur/
~/godaddy_export/new/
~/godaddy_export/tmp/
~/godaddy_export/.craig/cur/
~/godaddy_export/.craig/new/
~/godaddy_export/.craig/tmp/
~/godaddy_export/.gcs/cur/
~/godaddy_export/.gcs/new/
~/godaddy_export/.gcs/tmp/
</code></pre>

I could rsync to these folders on Bluehost
    .
<pre><code>
~/godaddy_export/.craig/
~/godaddy_export/.gcs/
</code></pre>
    
to
    
<pre><code>
~/mail/coot.net/craig/.godaddy_craig/
~/mail/coot.net/craig/.godaddy_gcs/
</code></pre>
    
<pre><code>
cd ~/godaddy_export/
scp -r .gcs cootnet@coot.net:mail/coot.net/godaddy_gcs
scp -r .craig cootnet@coot.net:mail/coot.net/craig/.godaddy_craig
</code></pre>

Then in Roundcube the folder must be subscribed to.

