# Page snapshot

```yaml
- generic [ref=e1]:
  - status
  - generic [ref=e2]:
    - link "Skip to main content" [ref=e3] [cursor=pointer]:
      - /url: "#maincontent"
    - region "Content" [ref=e7]:
      - main [ref=e10]:
        - generic [ref=e13]:
          - generic [ref=e14]:
            - img "e-kelaniya" [ref=e15]
            - heading "Log in to e-kelaniya" [level=1] [ref=e16]
          - link "Invalid login, please try again" [active] [ref=e17] [cursor=pointer]:
            - /url: "#"
          - alert [ref=e18]: Invalid login, please try again
          - generic [ref=e19]:
            - generic [ref=e20]:
              - generic [ref=e21]: Username
              - textbox "Username" [ref=e22]
            - generic [ref=e23]:
              - generic [ref=e24]: Password
              - generic [ref=e25]:
                - textbox "Password" [ref=e26]
                - generic: 
            - button "Log in" [ref=e28] [cursor=pointer]
            - link "Lost password?" [ref=e30] [cursor=pointer]:
              - /url: https://ekel.kln.ac.lk/login/forgot_password.php
          - generic [ref=e31]:
            - button "English ‎(en)‎" [ref=e37] [cursor=pointer]:
              - text: English ‎(en)‎
              - text: 
            - button " Cookies notice" [ref=e38] [cursor=pointer]:
              - generic [ref=e39]: 
              - text: Cookies notice
```