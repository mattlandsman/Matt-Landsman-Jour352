(()=>{"use strict";const d=window,o=d.document,e="pmcadm:";function t(){try{const e=[];o.querySelectorAll("div.admz-ads-grid").forEach((d=>d.style.display="none")),o.querySelectorAll("div.pmc-adm-boomerang-pub-div.ads-grid > div.ads-grid-c").forEach((d=>{e.push(d.id)})),d.blogherads.destroySlots(e)}catch(d){console.error(d)}}const c={"dfp:isdirect=true":t};d.addEventListener("message",(function(d){const o=d.data;if("string"==typeof o&&0===o.indexOf(e))for(const[d,t]of Object.entries(c))o.indexOf(d)>=e.length&&t()}),!1),d.pmc&&d.pmc.hooks&&d.pmc.hooks.add_action("pmc_adm_dfp_direct_sold",t)})();