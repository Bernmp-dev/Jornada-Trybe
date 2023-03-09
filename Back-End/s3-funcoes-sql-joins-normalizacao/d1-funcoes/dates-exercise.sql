-- 1 Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

select datediff('2030-01-20', CURRENT_DATE());

-- 2 Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.

select timediff('11:00:00', '10:25:45');